import { CanActivateFn } from '@angular/router';

export const guardiaGuard: CanActivateFn = (route, state) => {
  return true;
};
