<?php
include 'header-page.php';
?>



<head>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style-quiz.css?v=<?php echo time(); ?>">
    <title>Quiz Questions</title>
</head>

<body>


    <section class="container pb-5">
        <div class=" quiz-container d-flex flex-md-row flex-wrap justify-content-center">
            <div class="left  col-md-4 col-sm-12">
                <img src="assets/wave2.png" alt="" class="img-fluid img-wave">
                <!--<h1 class="pt-4" id="domain">HTML QUIZ</h1>-->
                <?php
                $name = $_GET['name'];
                echo "<h1 class='pt-4' id='domain'>$name quiz</h1>";
                ?>
                <p id="progress">Question x of y</p>

                <div class="img-quiz-left ">
                    <img src="assets/img3.JPG" alt="" class="img-fluid" style="border-radius: 60%;width: 240px;
                    height: 180px; box-shadow: 2px 5px 80px rgba(29, 16, 31, 0.603);">
                </div>

            </div>
            <div class="right col-md-8 col-sm-12">

                <div id="quiz">
                    <h3 id="question">Unavailable questions</h3>
                    <hr>
                    <div class=" pt-5 choices text-left">
                        <div id="btn0"><span class="nr-choice"> 1. </span>
                            <span id="choice0"></span></div>
                        <hr class="hr-choice">
                        <div id="btn1"><span class="nr-choice"> 2. </span>
                            <span id="choice1"></span></div>
                        <hr class="hr-choice">
                        <div id="btn2"><span class="nr-choice"> 3. </span>
                            <span id="choice2"></span></div>
                        <hr class="hr-choice">
                        <div id="btn3"><span class="nr-choice"> 4. </span>
                            <span id="choice3"></span> </div>
                        <hr class="hr-choice">

                    </div>

                </div>

            </div>
        </div>
    </section>
    <script src="js/quiz_controller.js"></script>
    <script src="js/question.js"></script>
    <script src="js/app.js?v=<?php echo time(); ?>"></script>
    <?php
    include 'footer-page.php';
    ?>

</body>