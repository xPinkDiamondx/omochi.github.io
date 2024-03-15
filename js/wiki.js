function mediaQueriesWin(){
    var width = $(window).width();
    if(width <= 768) {  /*横幅が768px以下の場合
        has-childクラスがついたaタグのonイベントを複数登録を避ける為
        offにしていったん初期状態へ */
    $(".has-child>a").off('click');
    /* has-childクラスが付いたaタグをクリックしたら */
    $(".has-child>a").on('click', function() {
    /* aタグから見た親要素の<li>を取得し */
    var parentElem = $(this).parent();
    /* 矢印方向を変えるためのクラス名を付与して*/
    $(parentElem).toggleClass('active');
    /* liの子要素のスライドを開閉させる ※数字が大きくなるほどゆっくり開く */
    $(parentElem).children('ul').stop().slideToggle(500);
    return false; /* リンクの無効 */
});
    }eles{ /* 横幅が768px以上の場合
            has-childクラスが付いたaタグのonイベントをoff(無効)にし */
        $(".has-child>a").off('click');
        $(".has-child").removeClass('active'); /* activeクラスを削除
            スライドトグルで動作したdisplayも無効化にする */
        $('.has-child').children('ul').css("display","");
    }
}

/* ページがリサイズされたら動かしたい場合の記述 */
$(window).resize(function() {
    mediaQueriesWin();  /* ドロップダウンの関数を呼ぶ */
});

/* ページが読み込まれたらすぐに動かしたい場合の記述 */
$(window).on('load',function(){
    mediaQueriesWin();  /* ドロップダウンの関数を呼ぶ */
});