<?php
if (isset($_POST['file'])) {
#if (!empty($_POST)) {
    $file = $_FILES['file'];
    #$FileSaveName = $_POST['nameOfFile'];

    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    #$allowed = array('.jpg', '.jpeg', '.png', '.nef');
    #if (in_array($fileActualExt, $allowed)) {
        if ($fileError !== 1){
            if ($fileSize < 50000) {
                # $fileNameNew = $FileSaveName .".".$fileActualExt;
                $fileNameNew = uniqid('', true).".".$fileActualExt;
                $fileDestination = "uploads/".$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: index.html?uploadsuccess");
                echo 'Success';
            } else {
                echo "Your file is too big!";
            }
        } else {
            echo "There was an error uploading your file";
            #echo $fileError;
            #echo $fileType;
            echo $file;

        }
    /*} else {
        echo "You cannot upload files of this type!";
        echo 'File Type: '.$fileActualExt;
        echo 'File Extension: '.end($fileExt);
        print_r($file);
    }*/
} else {
    echo 'Error 404';
};
?>