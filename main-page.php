<?php
include 'header-page.php';
?>

<main>

    <section class="section1">
        <div class="container-fluid text-center">
            <div class="row">

                <div class="col-md-7 col-sm-12 ">
                    <img src="assets/bg2.jpg" alt="people-mainPage" style=" width:100%;">
                </div>

                <div class="col-md-5 col-sm-12">

                    <h1>TEST YOUR PROGRAMING SKILLS</h1>

                    <p class="text-justify first-p">Hi there!</p>
                    <p class="text-justify">
                        Think you know all? You will be surprized at how many new things you could learn. Satisfy your hunger for knowledge with some awesome Web Development questions. Chose a domain from the list below and answer the questions. Good luck!
                    </p>

                </div>
            </div>
    </section>
    <section class=" section2 container-fluid pl-0 pr-0">

        <img src="assets/wave1.png" alt="wave img" style="width: 100%;" class="img-responsive img-wave">

        <div class="container-fluid text-center">
            <div class="language d-flex flex-md-row flex-wrap justify-content-center">
                <div class="rect">
                    <a href="quiz-page.php?name=html"></a>
                    <div class="circle">
                    </div>
                    <div class="logo-img">
                        <img src="assets/html-logo.png" alt="" style="width: 2.2rem; height: 2rem;">
                    </div>
                    <div class="text-justify pl-2 pt-3 pr-2 description-lang">
                        <h5>HTML</h5>
                        HTML is the standard markup language for Web pages.
                    </div>
                </div>
                <div class="rect">
                    <a href="quiz-page.php?name=css"></a>

                    <div class="circle"></div>
                    <div class="logo-img">
                        <img src="assets/css-logo.png" alt="" style="width: 2.2rem; height: 2.2rem;">
                    </div>
                    <div class="text-justify pl-2 pt-3 pr-2 description-lang">
                        <h5>CSS</h5>
                        CSS is a language that describes the style of an HTML document.
                    </div>
                </div>
                <div class="rect">
                    <a href="quiz-page.php?name=js"></a>

                    <div class="circle"></div>
                    <div class="logo-img">
                        <img src="assets/js-logo.png" alt="" style="width: 2.4rem; height: 2.2rem;">
                    </div>
                    <div class="text-justify pl-2 pt-3 pr-2 description-lang">
                        <h5>JS</h5>
                        JavaScript is the programming language of HTML and the Web.
                    </div>
                </div>

            </div>
        </div>

        <div class="container-fluid text-center">
            <div class="language d-flex flex-md-row flex-wrap justify-content-center">
                <div class="rect">
                    <a href="quiz-page.php?name=bootstrap"></a>

                    <div class="circle">
                    </div>
                    <div class="logo-img">
                        <img class="pb-3" src="assets/bootstrap-logo.jpg" alt="" style="width: 2.6rem; height: 3.4rem;">
                    </div>
                    <div class="text-left pl-2 pt-4 pr-2 description-lang">
                        <h5>BOOTSTRAP</h5>
                        Bootstrap is a free CSS framework.
                    </div>
                </div>
                <div class="rect">
                    <a href="quiz-page.php?name=php"></a>

                    <div class="circle"></div>
                    <div class="logo-img">
                        <img src="assets/php-logo.png" alt="" style="width: 2.4rem; height: 1.8rem;" class="pt-1">
                    </div>
                    <div class="text-justify pl-2 pt-4 pr-2 description-lang">
                        <h5>PHP</h5>
                        PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.
                    </div>
                </div>
                <div class="rect">
                    <a href="quiz-page.php?name=sql"></a>

                    <div class="circle"></div>
                    <div class="logo-img">
                        <img class="pb-2 pr-1" src="assets/sql-logo.png" alt="" style="width:4.2rem; height: 2.8rem;">
                    </div>
                    <div class="text-justify pl-2 pr-2  pt-4 description-lang">
                        <h5 class="pl-2">SQL</h5>
                        SQL is a standard language for storing, manipulating and retrieving data in databases.
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>
<?php
include 'footer-page.php';
?>