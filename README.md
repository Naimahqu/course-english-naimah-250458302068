<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bersama English Course</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #f8f3ec;
      color: #3b2f2f;
      font-family: 'Poppins', sans-serif;
      scroll-behavior: smooth;
    }

    /* === NAVBAR === */
    nav {
      background-color: #d9c2a7;
      padding: 8px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      border-bottom: 2px solid #b3936c;
    }

    nav .logo img {
      width: 75px;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 25px;
    }

    nav ul li a {
      text-decoration: none;
      color: #3b2f2f;
      font-weight: 500;
      transition: 0.3s;
    }

    nav ul li a:hover {
      color: #6f4e37;
    }

    /* === HEADER === */
    header {
      background-image: url('https://i.pinimg.com/1200x/35/26/a7/3526a7cdc6fefac62c3b8fff10e2fb79.jpg');
      background-size: cover;
      background-position: center;
      color: #fff;
      text-align: center;
      padding: 180px 20px 140px;
      position: relative;
    }

    header::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(60, 40, 30, 0.6);
    }

    .header-content {
      position: relative;
      z-index: 2;
    }

    .header-content h1 {
      font-family: 'Playfair Display', serif;
      font-size: 56px;
      margin-bottom: 10px;
      color: #f4e8d0;
    }

    .header-content h4 {
      font-size: 22px;
      font-weight: 300;
      color: #fcefdc;
    }

    .header-content p {
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto 25px;
    }

    .btn {
      background-color: #b38b59;
      color: #fff;
      padding: 12px 25px;
      border-radius: 25px;
      text-decoration: none;
      transition: 0.3s;
    }

    .btn:hover {
      background-color: #9a7546;
    }

    /* === SECTION === */
    section {
      padding: 100px 10%;
      text-align: center;
    }

    section h2 {
      font-family: 'Playfair Display', serif;
      color: #5b4033;
      margin-bottom: 15px;
      font-size: 32px;
    }

    section p {
      color: #4f3c2e;
      margin-bottom: 50px;
    }

    /* === CARD / GRID === */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .card {
      background-color: #fffaf3;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: 0.3s;
      border: 1px solid #e0c8a9;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card .content {
      padding: 20px;
    }

    /* === TENTANG SAYA === */
    #tentang-saya {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
    }

    #tentang-saya img {
      width: 280px;
      border-radius: 50%;
      border: 5px solid #d2b48c;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    #tentang-saya .desc {
      max-width: 600px;
      text-align: left;
    }

    .social a {
      color: #b38b59;
      font-size: 24px;
      margin-right: 15px;
      transition: .3s;
    }

    .social a:hover {
      color: #8c6239;
    }

    /* === FOOTER === */
    footer {
      background: #b38b59;
      color: #fff;
      text-align: center;
      padding: 25px;
      margin-top: 80px;
      font-family: 'Playfair Display', serif;
    }
  </style>
</head>
<body>

  <nav>
    <div class="logo">
      <img src="truuu.png" alt="Logo">
    </div>
    <ul>
      <li><a href="#program">Kursus</a></li>
      <li><a href="#tentang-saya">Tentang Saya</a></li>
      <li><a href="#pengalaman">Pengalaman</a></li>
    </ul>
  </nav>

  <header>
    <div class="header-content">
      <h4>Welcome to</h4>
      <h1>Bersama English Course</h1>
      <p>Belajar Bahasa Inggris dengan cara yang menyenangkan dan elegan dalam suasana vintage yang nyaman.</p>
      <a href="#program" class="btn">Mulai Belajar</a>
    </div>
  </header>

  <section id="program">
    <h2>Program Kursus</h2>
    <p>Pilih program yang sesuai dengan kebutuhanmu dan nikmati pembelajaran santai tapi efektif.</p>

    <div class="grid">
      <div class="card">
        <img src="images/beasiswa (1).png" alt="">
        <div class="content">
          <h3>Beginner Class</h3>
          <p>Belajar dasar-dasar bahasa Inggris dari nol dengan pendekatan fun dan friendly.</p>
          <a href="#" class="btn">Daftar Sekarang</a>
        </div>
      </div>

      <div class="card">
        <img src="images/beasiswa (2).png" alt="">
        <div class="content">
          <h3>Speaking Mastery</h3>
          <p>Latihan percakapan aktif dalam suasana cozy dengan tutor berpengalaman.</p>
          <a href="#" class="btn">Daftar Sekarang</a>
        </div>
      </div>

      <div class="card">
        <img src="images/beasiswa (3).png" alt="">
        <div class="content">
          <h3>IELTS & TOEFL Preparation</h3>
          <p>Persiapkan ujian internasionalmu dengan cara yang menyenangkan tapi fokus.</p>
          <a href="#" class="btn">Daftar Sekarang</a>
        </div>
      </div>
    </div>
  </section>

  <section id="tentang-saya">
    <img src="images/23842417-ac77-4f60-9efe-9da638ba9721-removebg-preview.png" alt="Tutor">
    <div class="desc">
      <h2>Tentang Saya</h2>
      <p>Hai! Saya <strong>Naimah</strong>, tutor bahasa Inggris dengan passion mengajar sejak 2020.  
      Saya percaya bahwa pembelajaran akan lebih bermakna jika dilakukan dengan hati, nuansa hangat, dan penuh semangat!</p>
      <div class="social">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </div>
  </section>

  <section id="pengalaman">
    <h2>Pengalaman</h2>
    <p>Beberapa pengalaman saya dalam dunia bahasa Inggris.</p>

    <div class="grid">
      <div class="card">
        <img src="images/Traducción Oficial.jpeg" alt="">
        <div class="content">
          <p>Translator freelance internasional selama 1 tahun dengan berbagai proyek edukasi.</p>
        </div>
      </div>

      <div class="card">
        <img src="images/inter.jpeg" alt="">
        <div class="content">
          <p>Pengajar di sekolah bertaraf internasional dengan pendekatan komunikatif dan interaktif.</p>
        </div>
      </div>

      <div class="card">
        <img src="images/kursu.jpeg" alt="">
        <div class="content">
          <p>Mengelola kursus bahasa Inggris pribadi selama 3 tahun dengan ratusan siswa aktif.</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Bersama English Course | Learn English with Style ✨</p>
  </footer>

</body>
</html>
