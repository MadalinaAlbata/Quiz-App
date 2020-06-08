<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LogIn/SignUp</title>
    <link rel="stylesheet" href="css/login-signup-style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/57454617b6.js" crossorigin="anonymous"></script>
</head>

<body>

    <div class="container">
        <div class="main-box d-flex  d-flex flex-md-row flex-wrap justify-content-center">
            <div class="left-box col-md-7 col-sm-12">
                <h1 class="text-center pt-3">Test your skills!</h1>
                <img src="assets/img0.jpg" alt="" class="img-cloud img-fluid">
                <p class="text-center"> Focus on the work that matters. Plan your activities and control your progress online.
                </p>
            </div>
            <div class=" form-box col-md-5 col-sm-12" id="main">
                <div class="button-box w-75" id="buttons">
                    <div id="btn"></div>
                    <button type="button" id="btn_login" class="toggle-btn" onclick="login()">Log
                        In</button>

                    <button type="button" id="btn_signup" class="toggle-btn" onclick="register()">Sign
                        up</button>
                </div>
                <div class="icon-box">

                    <i class="fab fa-facebook-f icon"></i>

                    <i class="fab fa-twitter icon"></i>
                    <i class="fab fa-google icon"></i>

                </div>
                <?php
                if (isset($_GET['error'])) {
                    if (($_GET['error']) == "emptyfields") {
                        echo '<p class="error"> Fill in all fields</p>';
                    } else if (($_GET['error']) == "wrongpassword") {
                        echo '<p class="error">Wrong password</p>';
                    } else if (($_GET['error']) == "nouser") {
                        echo '<p class="error">Invalid username</p>';
                    }
                } else if (isset($_GET["signup"]) == "success") {
                    echo '<p>sign up successful</p>';
                }
                ?>

                <form id="login" class="form-input-group" action="includes/login.inc.php" method="post">
                    <!--<div class="input-group mb-3 inputWithIcon">
                        <div class="input-group-prepend">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input type="text" class="input-field" name="mailuid" placeholder="Username/Email">

                        </div>-->
                    <div class="inputWithIcon">
                        <input type="text" class="input-field" name="mailuid" placeholder="Username/Email">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>

                    <div class="inputWithIcon">
                        <input type="password" class="input-field" name="pwd" placeholder="Password">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <button type="submit" class="submit-btn" name="login-submit">Log in</button>

                </form>

                <form id="signup" class="form-input-group" action="includes/signup.inc.php" method="post">
                    <div class="inputWithIcon">
                        <input type="text" class="input-field" name="uid" placeholder="Username">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>

                    <div class="inputWithIcon">
                        <input type="text" class="input-field" name="mail" placeholder="E-mail">
                        <i class="fa fa-envelope" aria-hidden="true"></i>

                    </div>

                    <div class="inputWithIcon">
                        <input type="password" class="input-field" name="pwd" placeholder="Password">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>

                    <div class="inputWithIcon">
                        <input type="password" class="input-field" name="pwd-repeat" placeholder="Confirm Password">
                        <i class="fa fa-key" aria-hidden="true"></i>

                    </div>
                    <button type="submit" class="submit-btn" name="signup-submit">Sign up</button>

                </form>


            </div>
        </div>
    </div>


    <script src="js/script.js?v=<?php echo time(); ?>"></script>
</body>

</html>