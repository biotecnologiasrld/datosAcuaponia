const scriptURL = 'https://script.google.com/macros/s/AKfycbytOLj295A6B3V5nsnMgouuajlHrzcbPpwqQK1xZ6cX2twGXL0rWesJ_A3Yruy9_tML4g/exec'; 
    const form = document.getElementById('waterQualityForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', e => {
        e.preventDefault();
         // Mostrar SweetAlert2 de carga
        Swal.fire({
            title: 'Guardando...',
            html: 'Por favor espera',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const formData = new FormData(form);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Datos guardados',
                    text: 'Tu registro fue exitoso ✅',
                    timer: 2000,
                    showConfirmButton: false
                });
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al guardar',
                    text: 'No se pudieron enviar los datos ❌',
                });
            });
    });