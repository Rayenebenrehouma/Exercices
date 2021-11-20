$(document).ready(function () {
    function getHtmlTableLine(tableLine) {
        return `
<tr>
    <td>${tableLine.name}</td>
    <td>${tableLine.country}</td>
    <td>${tableLine.logo}</td>
    <td>${tableLine.slogan}</td>
    <td>${tableLine.head_quaters}</td>
    <td>${tableLine.website}</td>
    <td>${tableLine.established}</td>
</tr>`
    }

    function replaceHtml(tableLine){
        return `
<tr>
    <td>${tableLine[i].name}</td>
    <td>${tableLine[i].country}</td>
    <td>${tableLine[i].logo}</td>
    <td>${tableLine[i].slogan}</td>
    <td>${tableLine[i].head_quaters}</td>
    <td>${tableLine[i].website}</td>
    <td>${tableLine[i].established}</td>
</tr>`
    }


    function addTableLine(tableLine, idTable) {
        let html = getHtmlTableLine({
            name: tableLine.name,
            country: tableLine.country,
            logo: tableLine.logo,
            slogan: tableLine.slogan,
            head_quaters: tableLine.head_quaters,
            website: tableLine.website,
            established: tableLine.established
        });

        $(idTable).append(html);
    }



    $.ajax({
        url: "https://api.instantwebtools.net/v1/airlines",
        method: "GET",
        dataType: "json",
        success: function (data) {
            clickConsole();
            clickRayen();
            plusTen();
            newTen();

            //Ajouter  les 10 lignes suivantes au tableau
            function plusTen(idButton) {
                let start = 11;
                let end = 21;
                $(idButton).on('click', function () {
                    for (let i = start; i < end; i++) {
                        addTableLine(data[i], "#table1");
                    }
                    start += 10 //start += 10
                    end += 10 // end += 10
                    console.log(start);
                });
            }


            for (let i = 0; i < 10; i++) {
                if (data[i] !== undefined) {
                    const tableLine = {
                        name:data[i].name,
                        country:data[i].country,
                        logo: data[i].logo,
                        slogan: data[i].slogan,
                        head_quaters: data[i].head_quaters,
                        website: data[i].website,
                        established: data[i].established,
                    };
                    let html = getHtmlTableLine(tableLine);
                    $("#table1").append(html);
                }
            }

            //Faire apparaitre un console.log() avec un bouton
            function clickConsole() {
                $("#button1").on('click', function () {
                    console.log("Hello !");
                })
            }

            // Remplacer les lignes de tableaux par les info de Rayen avec le bouton Rayen
            function clickRayen() {
                $("#button2").on('click', function () {
                    $("#table1").html(getHtmlTableLine(
                        {
                            name: "Rayen",
                            country: "Tunisie",
                            logo: "oui.png",
                            slogan: "Bijour",
                            head_quaters: "MIT",
                            website: "oui.com",
                            established: "Oui"
                        }
                    ));
                })
            }

            plusTen("#button3");

            //Remplacer les 10 premières lignes par les 10 d'après etc...
            function newTen() {
                let start = 11;
                let end = 21;
                $("#button4").on('click', function () {
                    $("#table1").html('');
                    for (let i = start; i < end; i++) {
                        addTableLine(data[i], "#table1");
                    }
                    start += 10
                    end += 10
                    console.log(start);
                    console.log(end);
                })
            }
        },
        error: function (err) {
            console.log("ça plante", err);
        },
    })
});
