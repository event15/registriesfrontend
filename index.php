<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>
    <meta name="description" content="The HTML5 Herald">
    <meta name="author" content="SitePoint">

    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/datepicker.css">

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
<!--    <script src="js/libs/underscore/underscore-min.js" type="text/javascript"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
    <script src="//cdn.jsdelivr.net/webshim/1.14.5/polyfiller.js"></script>
    <script src="js/libs/multifilter/multifilter.js"></script>
    <script src="js/libs/footable/footable.js"></script>

 <script data-main="js/main" src="js/libs/require/require.js"></script>




</head>
<body>



<section class="wrapper full-width">

    <a  class="options button-top dodaj-wpis"><i class="fa fa-plus"></i>Dodaj wpis</a>
    <a  class="options button-top zaznacz-wszystkie"><i class="fa fa-sort-amount-asc"></i>Zaznacz widoczne</a>
    <a  class="options button-top usun-wszystkie"><i class="fa fa-trash-o"></i>Usuń zaznaczone</a>

    <input data-table="order-table" class="options wyszukaj light-table-filter" type="search" placeholder="Wyszukaj">
    <div class="container">
        <div class="container__table">
        <!--<table id="tableData" class="footable order-table table">
        <thead>
            <tr>
                <th class="clean"></th>
                <th>Marka<i class="fa fa-sort"></i></th>
                <th>Model<i class="fa fa-sort"></i></th>
                <th>Numer rejestracyjny<i class="fa fa-sort"></i></th>
                <th>Ubezpieczyciel<i class="fa fa-sort"></i></th>
                <th class="termin1">Termin 1<i class="fa fa-sort"></i></th>
                <th class="termin2">Termin 2<i class="fa fa-sort"></i></th>
            </tr>
        </thead>
        <tbody id="asd">
            <tr data-id="1">
                <td class="quick-options"><i class="fa fa-trash-o usun-jeden"></i><i class="checkbox fa fa-square-o"></i></td>
                <td>Sum</td>
                <td>Sum</td>
                <td>Sum</td>
                <td>Sum</td>
                <td class="termin-hot">01-07-2000</td>
                <td class="termin-warm">345</td>
            </tr>

            <tr data-id="2">
                <td class="quick-options"><i class="fa fa-trash-o usun-jeden"></i><i class="checkbox fa fa-square-o"></i></td>
                <td>January</td>
                <td>January</td>
                <td>January</td>
                <td>January</td>
                <td class="termin-green">06-01-2012</td>
                <td class="termin-warm">5678</td>
            </tr>
            <tr data-id="3">
                <td class="quick-options"><i class="fa fa-trash-o usun-jeden"></i><i class="checkbox fa fa-square-o"></i></td>
                <td>February</td>
                <td>February</td>
                <td>February</td>
                <td>February</td>
                <td class="termin-green">08-07-2015</td>
                <td class="termin-green">12</td>
            </tr>

            <tr data-id="4">
                <td class="quick-options"><i class="fa fa-trash-o usun-jeden"></i><i class="checkbox fa fa-square-o"></i></td>
                <td>June</td>
                <td>June</td>
                <td>June</td>
                <td>June</td>

                <td class="termin-green">10-10-2000</td>
                <td class="termin-warm">567567</td>
            </tr>
        </tbody>

        </table>-->
        </div>
        <div class="pagination pagination-centered hide-if-no-paging"></div>
    </div>

    <div class="wrapper__sidebar--left">
        <a href="#/dodajRejestr" class="dodaj-rejestr">
            <i class="fa fa-plus"></i>Dodaj rejestr
        </a>
        <ul>
<!--            <li class="typ-rejestru"><a href="#samochody">Rejestr samochodów</a></li>-->
<!--            <li class="typ-rejestru"><a class="selected" href="#typRejestru2">Rejestr polis NWK i WiU 2015</a></li>-->
<!--            <li class="typ-rejestru"><a href="#typRejestru3">Rejestr wadium 2015</a></li>-->
<!--            <li class="typ-rejestru"><a href="#typRejestru4">Rejestr samochodów</a></li>-->
<!--            <li class="typ-rejestru"><a href="#typRejestru5">Rejestr polis NWK i WiU 2015</a></li>-->
        </ul>
    </div>


</section>


<section class="sidebar--right hide">
    <h1>DANE</h1>
    <div class="lista">
        <div class="lista__klucz">
            <ul>
                <li>Marka</li>
                <li>Model</li>
                <li>Numer rejestracyjny</li>
                <li>Ubezpieczyciel</li>
                <li>Termin 1</li>
                <li>Termin 2</li>
            </ul>
        </div>
        <div class="lista__dane">
            <ul>
                <li><input type="text" value="January"></li>
                <li><input type="text" value="January"></li>
                <li><input type="text" value="January"></li>
                <li><input type="text" value="January"></li>
                <li><input type="date" value="2015-07-15"></li>
                <li><input type="date" value="2015-07-15"></li>
            </ul>
        </div>

    </div>
    <a class="sidebar__button button--ed">Edytuj</a>


    <!--<h1>DODAJ REJESTR</h1>
    <div class="lista">
        <div class="lista__klucz">
            <ul>
                <li>Nazwa</li>
                <li>Typ</li>
            </ul>
        </div>
        <div class="lista__dane">
            <ul>
                <li><input type="text" value=""></li>
                <li><select>
                        <option>Samochody</option>
                        <option>Ubezpieczenia Lorem Ipsum</option>
                        <option>Polisy Krasnoludki WKS</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
    <a class="sidebar__button button--rej">Dodaj Rejestr</a>
    -->



    <!--<h1>DODAJ WPIS</h1>
    <div class="lista">
        <div class="lista__klucz">
            <ul>
                <li>Marka</li>
                <li>Model</li>
                <li>Numer rejestracyjny</li>
                <li>Ubezpieczyciel</li>
                <li>Termin 1</li>
                <li>Termin 2</li>
            </ul>
        </div>
        <div class="lista__dane">
            <ul>
                <li><input type="text" value=""></li>
                <li><input type="text" value=""></li>
                <li><input type="text" value=""></li>
                <li><input type="text" value=""></li>
                <li><input type="date" value=""></li>
                <li><input type="date" value=""></li>
            </ul>
        </div>
    </div>
    <a class="sidebar__button button--def">Dodaj Wpis</a>-->


</section>


<script src="js/scripts.js"></script>



<script>

</script>



</body>
</html>



