
 <!-- Link Swiper's CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />

    <!-- Demo styles -->
    <style>
    

      .swiper {
        width:100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background:none;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width:100%;
        height: 100%;
        object-fit: cover;
      }
    </style>



 <!-- Swiper -->
 <div class="wrap02">
    <div class="swiper mySwiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/01.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/02.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/03.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/04.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/05.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/06.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/07.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/08.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/09.png"></div>
			<div class="swiper-slide"><img src="<?php echo G5_URL; ?>/images/review/10.png"></div>
		 </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
</div>




    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    </script>

<!--} 메인슬라이드 끝  -->






