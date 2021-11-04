$(document).ready(function(){
    $.ajax({
        url: "https://api.instantwebtools.net/v1/airlines",
        method: "GET",
        dataType : "json",
        success: function(data){
            clickConsole();
            clickRayen();
            plusTen();
            newTen();

            for( let i = 0; i < 10 ; i++){
                if (data[i] != undefined){
                    //data[3] = undefined;
                    let html =
                        "<tr><td>" + data[i].name + "</td><td>"
                        + data[i].country +"</td><td>"
                        + data[i].logo + "</td><td>"
                        + data[i].slogan + "</td><td>"
                        + data[i].head_quaters + "</td><td>"
                        + data[i].website + "</td><td>"
                        + data[i].established + "</td><td>";
                    $("#table1").append(html);

                }
            }
            //Faire apparaitre un console.log() avec un bouton
            function clickConsole(){
                let test = $("#button1");
                test.on('click', function() {
                    console.log("Hello !");
                })
            }
            // Remplacer les lignes de tableaux par les info de Rayen avec le bouton Rayen
            function clickRayen(){
                $("#button2").on('click', function(){
                    $("#table1").html(
                        '<tr>\n' +
                        '    <td>Rayen Airways</td>\n' +
                        '    <td>Tunisi</td>\n' +
                        '    <td>bg_du_94.png</td>\n' +
                        '    <td>Going Places Together</td>\n' +
                        '    <td>Tahia Tunsia</td>\n' +
                        '    <td>www.rayen.com</td>\n' +
                        '    <td>1995</td>\n' +
                        '</tr>');
                })
            }
            //Ajouter  les 10 lignes suivantes au tableau
            function plusTen(){
                let n = 11;
                let p = 21;
                $("#button3").on('click', function(){
                    for( let i = n; i < p ; i++){
                        let html =
                            "<tr><td>" + data[i].name + "</td><td>"
                            + data[i].country +"</td><td>"
                            + data[i].logo + "</td><td>"
                            + data[i].slogan + "</td><td>"
                            + data[i].head_quaters + "</td><td>"
                            + data[i].website + "</td><td>"
                            + data[i].established + "</td><td>";

                        $("#table1").append(html);
                    }
                    n = n+10
                    p = p+10
                })
            }

            //Remplacer les 10 premières lignes par les 10 d'après etc...
            function newTen(){
                let a = 11;
                let b = 21;
                $("#button4").on('click', function(){
                    if($("#table1").length){
                        let table1 =
                            "<tbody id=table2>"
                            +   "</tbody>";
                        $("#table1").replaceWith(table1);
                    }else if($("#table2").length){
                        let table2 =
                            "<tbody id=table1>"
                            +   "</tbody>";
                        $("#table2").replaceWith(table2);
                    }
                    if($("#table1").length){
                        for( let i = a; i < b ; i++){
                            let html =
                                "<tr><td>" + data[i].name + "</td><td>"
                                + data[i].country +"</td><td>"
                                + data[i].logo + "</td><td>"
                                + data[i].slogan + "</td><td>"
                                + data[i].head_quaters + "</td><td>"
                                + data[i].website + "</td><td>"
                                + data[i].established + "</td><td>";
                            $("#table1").append(html);
                        }
                        a = a+10
                        b = b+10
                    }else if($("#table2").length){
                        for( let i = a; i < b ; i++){
                            let html =
                                "<tr><td>" + data[i].name + "</td><td>"
                                + data[i].country +"</td><td>"
                                + data[i].logo + "</td><td>"
                                + data[i].slogan + "</td><td>"
                                + data[i].head_quaters + "</td><td>"
                                + data[i].website + "</td><td>"
                                + data[i].established + "</td><td>";
                            $("#table2").append(html);
                        }
                        a = a+10
                        b = b+10
                    }
                })
            }
        },
        error: function(err){
            console.log("ça plante",err);
        },
    })
});