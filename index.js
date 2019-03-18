const ctx = document.getElementById("hello").getContext("2d");

function generatePie(){
    const numText = document.getElementById("numBox").value;
    const numArray = numText.split(",").map(str => parseInt(str, 10));;
    console.log("arr: " + numArray);
    const chart = new Chart(ctx, {
        // 作成したいチャートのタイプ
        type: "pie",
    
        // データセットのデータ
        data: {
            datasets: [{
                backgroundColor: ["#FE2E2E", "#FF8000", "#FFFF00", "#40FF00", "#00FFFF", "#FF00FF", "#BDBDBD", "#BF00FF"],
                borderColor: "#000000",
                data: numArray,
            }]
        },
    
        // ここに設定オプションを書きます
        options: {}
    });
    console.log("sum: " + numArray.reduce((a, b) => a += b, 0));
}