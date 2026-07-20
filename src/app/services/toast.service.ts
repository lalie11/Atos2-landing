import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error';

export interface ToastState {
  message: string;
  type: ToastType;
}

/**
 * Remplace la fonction showToast() du script.js original.
 * Le composant ToastComponent (ou tout autre composant) peut
 * s'abonner au signal `toast` pour afficher la notification.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toast = signal<ToastState | null>(null);
  private timeoutId?: ReturnType<typeof setTimeout>;

  show(message: string, type: ToastType = 'success'): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.toast.set({ message, type });

    this.timeoutId = setTimeout(() => {
      this.toast.set(null);
    }, 4000);
  }
}
