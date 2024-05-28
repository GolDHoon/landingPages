<?php

if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)) {
    $ip_address = array_pop(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']));
} else {
    $ip_address = $_SERVER['REMOTE_ADDR'];
}

if (in_array($ip_address, ['175.202.236.2','211.114.121.46'])) {
    header("Location: https://cyberbureau.police.go.kr/index.do");
}

include_once('./common.php');

// 커뮤니티 사용여부
if(defined('G5_COMMUNITY_USE') && G5_COMMUNITY_USE === false) {
    if (!defined('G5_USE_SHOP') || !G5_USE_SHOP)
        die('<p>쇼핑몰 설치 후 이용해 주십시오.</p>');

    define('_SHOP_', true);
}