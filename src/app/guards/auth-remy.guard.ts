import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authRemyGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("AuthToken");

  if(token){
    return true;
  } else {
    router.navigate(['authentication/login']);
    return false;
  }
};
