import Swal from 'sweetalert2';

// Success toast (top-right)
export const showSuccess = (message) => {
  Swal.fire({
    toast: true,
    position: 'top-end',  // top-right corner
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

// Error toast (top-right)
export const showError = (message) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

// Confirmation dialog (center modal)
export const showConfirm = async (message) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true,
  });
  return result.isConfirmed;
};