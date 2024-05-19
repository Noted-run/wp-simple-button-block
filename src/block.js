(function (blocks, element) {
  var el = element.createElement;

  //スタイルをオブジェクト形式 { } で記述して変数に代入（23、30行目で参照）
  var blockStyle = {
    backgroundColor: "#900", //キャメルケース（区切りはカンマ）
    color: "#fff",
    padding: "20px",
  };

  //registerBlockType でブロックを登録
  blocks.registerBlockType(
    //namespace を含むブロックの名前 namespace/block-name
    "my-blocks/my-first-block",
    //ブロックのプロパティ（動作を定義するオブジェクト）
    {
      title: "My First Block Sample",
      icon: "universal-access-alt",
      category: "layout",
      edit: function () {
        return el(
          "p",
          { style: blockStyle }, //インラインスタイル（style属性）でスタイル（5行目）を指定
          "Hello World, sample 01 (edit/エディタ用)."
        );
      },
      save: function () {
        return el(
          "p",
          { style: blockStyle },
          "Hello World, sample 01 (save/フロントエンド用)."
        );
      },
    }
  );
})(window.wp.blocks, window.wp.element);
