import { useEffect, RefObject, useCallback } from 'react';
import { useTouch } from '../_util/useTouch';
import getScrollParent from '../_util/getScrollParent';
import { supportsPassive } from '../_util/supportsPassive';

let totalLockCount = 0;

// 移植自vant：https://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts
export function useLockScroll(rootRef: RefObject<HTMLElement>, shouldLock: boolean, componentName: string) {
  const touch = useTouch();
  const BODY_LOCK_CLASS = `${componentName}--lock`;

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      touch.move(event);

      const direction = touch.deltaY.current > 0 ? '10' : '01';
      const el = getScrollParent(event.target as Element, rootRef.current) as HTMLElement;
      if (!el) return;
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = '11';

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    },
    [rootRef, touch],
  );

  const lock = useCallback(() => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener('touchmove', onTouchMove, supportsPassive ? { passive: false } : false);

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount += 1;
  }, [onTouchMove, touch.start, BODY_LOCK_CLASS]);

  const unlock = useCallback(() => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);

      totalLockCount -= 1;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  }, [onTouchMove, touch.start, BODY_LOCK_CLASS]);

  useEffect(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock, lock, unlock]);
}
