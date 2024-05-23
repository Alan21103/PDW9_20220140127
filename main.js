
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen tombol sebelum dan sesudah
    var prevButton = document.querySelector(".carousel-control-prev");
    var nextButton = document.querySelector(".carousel-control-next");

    // Menambahkan event listener untuk tombol sebelumnya
    prevButton.addEventListener("click", function() {
        var activeItem = document.querySelector(".carousel-item.active");
        var prevItem = activeItem.previousElementSibling || activeItem.parentElement.lastElementChild;
        activeItem.classList.remove("active");
        prevItem.classList.add("active");
    });

    // Menambahkan event listener untuk tombol berikutnya
    nextButton.addEventListener("click", function() {
        var activeItem = document.querySelector(".carousel-item.active");
        var nextItem = activeItem.nextElementSibling || activeItem.parentElement.firstElementChild;
        activeItem.classList.remove("active");
        nextItem.classList.add("active");
    });
});

// Menginisialisasi carousel
var myCarousel = document.getElementById('carouselExampleFade');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Mengatur interval auto slide dalam milidetik (misalnya, 3000 = 3 detik)
  wrap: true // Mengatur agar carousel berulang ketika mencapai akhir
});


  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#ticket"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('ticket');
      // Menggulirkan halaman ke bagian "about" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('home');
      // Menggulirkan halaman ke bagian "home" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#event"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('event');
      // Menggulirkan halaman ke bagian "video" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const concert = document.getElementById('concert').value;
    const agree = document.getElementById('agree').checked;

    // Check if all fields are filled and the checkbox is checked
    if (name && quantity && concert && agree) {
        // Use SweetAlert to display the values
        Swal.fire({
            title: 'Ticket Purchase Details',
            html: `
                <strong>Name:</strong> ${name}<br>
                <strong>Ticket Quantity:</strong> ${quantity}<br>
                <strong>Concert:</strong> ${concert}<br>
                <strong>Agreed to terms:</strong> ${agree ? 'Yes' : 'No'}
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        }).then(() => {
            // Add ticket to the list after the modal is closed
            const ticketList = document.getElementById('ticket-list');
            const ticketItem = document.createElement('li');
            ticketItem.className = 'list-group-item';
            ticketItem.textContent = `Name: ${name}, Ticket Quantity: ${quantity}, Concert: ${concert}`;
            ticketList.appendChild(ticketItem);

            // Reset form
            document.getElementById('ticket-form').reset();
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Please fill out all fields and agree to the terms and conditions.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}