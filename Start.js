iimPlay("G:\\xampp\\htdocs\\scraping\\googlesearch_linked_profile\\InitAutoTrader.iim");

//var refreshEach = 10;
 //7501
var urls= [
    "https://www.google.com/#q=Nayef+Taamneh+loanDepot.com+LLC",
    "https://www.google.com/#q=Jonathan+Lee+NATIONS+LENDING+CORPORATION",
    "https://www.google.com/#q=Jason+Sheppard+WR+Starkey+Mortgage+LLP",
    "https://www.google.com/#q=Katherine+Clayton+Cendera+Funding+Inc.",
    "https://www.google.com/#q=Audrey+Fuller+DHI+MORTGAGE+COMPANY+LTD.",
    "https://www.google.com/#q=Jennifer+Weidner+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=John+Dillon+One+Reverse+Mortgage+LLC",
    "https://www.google.com/#q=Kenneth+Lutterbach+One+Reverse+Mortgage+LLC",
    "https://www.google.com/#q=Gregory+Harper+Everett+Financial+Inc.",
    "https://www.google.com/#q=Christine+Lewis+American+Advisors+Group",
    "https://www.google.com/#q=Wendy+Bearden+Bearden+Wendy+Marie",
    "https://www.google.com/#q=Wendy+Bearden+ARRAY+CAPITAL+INVESTMENT+COMPANY+LLC",
    "https://www.google.com/#q=Debra+Smith+The+Lending+Partners+LLC",
    "https://www.google.com/#q=Jason+Bresnock+American+Advisors+Group",
    "https://www.google.com/#q=April+Collison+E+Mortgage+Management+LLC",
    "https://www.google.com/#q=Latonya+White+Golden+Key+Realty+&+Mortgage+Services+LLC",
    "https://www.google.com/#q=Jarred+Briggle+Cendera+Funding+Inc.",
    "https://www.google.com/#q=Korrie+Iverson+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Janice+Austin+ISGN+Solutions+Inc.",
    "https://www.google.com/#q=Elisa+Seitz+Broker+Solutions+Inc.",
    "https://www.google.com/#q=Joseph+McGroom+21st+Mortgage+Corporation",
    "https://www.google.com/#q=Peter+Chase+CrossCountry+Mortgage+Inc.",
    "https://www.google.com/#q=Sandra+Durant+Lifeway+Lending+Group+Inc.",
    "https://www.google.com/#q=Steven+McBride+CrossCountry+Mortgage+Inc.",
    "https://www.google.com/#q=Robert+Peterson+Low+VA+Rates+LLC",
    "https://www.google.com/#q=Russell+Seal+21st+Mortgage+Corporation",
    "https://www.google.com/#q=Brian+Burton+360+Mortgage+Group+LLC",
    "https://www.google.com/#q=Debra+Huffman+NATIONS+LENDING+CORPORATION",
    "https://www.google.com/#q=Margely+Green+Town+Square+Mortgage+&+Investments+Inc.",
    "https://www.google.com/#q=Amelia+Theis+COMMONWEALTH+MORTGAGE+OF+TEXAS+LP",
    "https://www.google.com/#q=Lindsie+Moltz+Sente+Mortgage+Inc.",
    "https://www.google.com/#q=Jennifer+Williamson+DHI+MORTGAGE+COMPANY+LTD.",
    "https://www.google.com/#q=Loretta+Simpson+Amcap+Mortgage+Ltd.",
    "https://www.google.com/#q=Brian+Flanigan+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Heather+Foster+Everett+Financial+Inc.",
    "https://www.google.com/#q=Brittony+Thomas+Nations+Reliable+Lending+LLC",
    "https://www.google.com/#q=Carolee+Taylor+Hancock+Mortgage+Partners+LLC",
    "https://www.google.com/#q=Fernando+Avila+loanDepot.com+LLC",
    "https://www.google.com/#q=Christopher+Henderson+Skyline+Financial+Corp.",
    "https://www.google.com/#q=Kyle+Pontello+PennyMac+Loan+Services+LLC",
    "https://www.google.com/#q=Meybi+Nufio+JNC+Mortgage+Company+Inc.",
    "https://www.google.com/#q=Mark+Burlison+DKF+Enterprise+Inc.",
    "https://www.google.com/#q=Badarian+Abdus-Salaam+NATIONS+LENDING+CORPORATION",
    "https://www.google.com/#q=Robert+Breeding+Carrington+Mortgage+Services+LLC",
    "https://www.google.com/#q=Jackson+Thomas+SUMMIT+FUNDING+INC.",
    "https://www.google.com/#q=Josette+Chevalier+Josette+Marie+Chevalier",
    "https://www.google.com/#q=Peter+Mocny+E+Mortgage+Management+LLC",
    "https://www.google.com/#q=Jacqueline+Viar+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Aihua+Li+AAXY+L.L.C.",
    "https://www.google.com/#q=Loranda+Stuart+New+Penn+Financial+LLC",
    "https://www.google.com/#q=Bradley+Jones+CalCon+Mutual+Mortgage+LLC",
    "https://www.google.com/#q=Charles+Austin+Cardinal+Financial+Company+Limited+Partnership",
    "https://www.google.com/#q=Darwin+Holmes+Cardinal+Financial+Company+Limited+Partnership",
    "https://www.google.com/#q=Whitney+Black+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Antonio+Segovia+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Turner+Earnest+Planet+Home+Lending+LLC",
    "https://www.google.com/#q=Bryan+Miller+loanDepot.com+LLC",
    "https://www.google.com/#q=William+Woolard+loanDepot.com+LLC",
    "https://www.google.com/#q=Orlando+McConnell+Cardinal+Financial+Company+Limited+Partnership",
    "https://www.google.com/#q=Sean+Beaudry+Cardinal+Financial+Company+Limited+Partnership",
    "https://www.google.com/#q=Joseph+Thomas+loanDepot.com+LLC",
    "https://www.google.com/#q=Raymond+Sykes+Nationstar+Mortgage+LLC",
    "https://www.google.com/#q=Charles+Endicott+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=Alfonso+Guzman+loanDepot.com+LLC",
    "https://www.google.com/#q=Derrick+Dugan+Pulte+Mortgage+LLC",
    "https://www.google.com/#q=David+Le+loanDepot.com+LLC",
    "https://www.google.com/#q=Trevor+Pockrus+Nationstar+Mortgage+LLC",
    "https://www.google.com/#q=Carlos+Flores-Perez+loanDepot.com+LLC",
    "https://www.google.com/#q=Marcus+Gates+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=Steven+Sipes+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Richard+Glaser+Carrington+Mortgage+Services+LLC",
    "https://www.google.com/#q=Tristan+Davidson+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=Michael+Henson+loanDepot.com+LLC",
    "https://www.google.com/#q=Matthew+Nichol+loanDepot.com+LLC",
    "https://www.google.com/#q=Joshua+Phillips+Everett+Financial+Inc.",
    "https://www.google.com/#q=Scott+Custead+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Damian+London+Carrington+Mortgage+Services+LLC",
    "https://www.google.com/#q=Ana+Borrego+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Paul+Greager+RANLife+Inc.",
    "https://www.google.com/#q=Christopher+Kifaya+Genpact+Mortgage+Services+Inc.",
    "https://www.google.com/#q=Sara+St.+John+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=John+Zink+Ditech+Financial+LLC",
    "https://www.google.com/#q=Leon+Potter+Cross+Country+Equity+LLC",
    "https://www.google.com/#q=Evan+Fiore+J.G.+Wentworth+Home+Lending+LLC",
    "https://www.google.com/#q=Faviola+Gonzalez+Sutherland+Mortgage+Services+Inc.",
    "https://www.google.com/#q=Christine+Alindada+Beam+Mortgage+Inc",
    "https://www.google.com/#q=Erin+Howland+Amcap+Mortgage+Ltd.",
    "https://www.google.com/#q=Nancy+Currie+Guild+Mortgage+Company",
    "https://www.google.com/#q=Jay+Garrett+Everett+Financial+Inc.",
    "https://www.google.com/#q=Rosa+Gonzalez+Highlands+Residential+Mortgage+Ltd.",
    "https://www.google.com/#q=Alex+Luzadre+Freedom+Mortgage+Corporation",
    "https://www.google.com/#q=Nicholas+DeSouza+America+Funding+Loans+LLC",
    "https://www.google.com/#q=Daniel+Cormier+NATIONS+LENDING+CORPORATION",
    "https://www.google.com/#q=David+Humphrey+America+Funding+Loans+LLC",
    "https://www.google.com/#q=Kristian+Hayes+Pacific+Union+Financial+LLC",
    "https://www.google.com/#q=Gerardo+Rivera+Broker+Solutions+Inc.",
    "https://www.google.com/#q=Noah+Ortiz+Broker+Solutions+Inc.",
    "https://www.google.com/#q=Brian+Gibbs+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Jeffrey+Cordell+RoundPoint+Mortgage+Servicing+Corporation",
    "https://www.google.com/#q=Jason+Robertson+Broker+Solutions+Inc.",
    "https://www.google.com/#q=Mark+Alvarado+SWBC+Mortgage+Corporation",
    "https://www.google.com/#q=Jennifer+Spring+Amerifirst+Financial+Inc.",
    "https://www.google.com/#q=Donna+Lafont+Union+Home+Mortgage+Corp.",
    "https://www.google.com/#q=Breon+Bradley+CalCon+Mutual+Mortgage+LLC",
    "https://www.google.com/#q=Jennifer+Salter+Cornerstone+Home+Lending+Inc.",
    "https://www.google.com/#q=Sheryl+Trembley+Axia+Financial+LLC",
    "https://www.google.com/#q=Sean+Sucharski+loanDepot.com+LLC",
    "https://www.google.com/#q=Jeremy+McDonald+Carrington+Mortgage+Services+LLC",
    "https://www.google.com/#q=Cory+Anderson+American+Advisors+Group",
    "https://www.google.com/#q=Debra+Oliphant+Caliber+Home+Loans+Inc.",
    "https://www.google.com/#q=Shamez+Pirani+PARAMOUNT+SERVICES+LLC",
    "https://www.google.com/#q=Shamez+Pirani+SOUTHWEST+AMERICAN+MORTGAGE+SERVICES+LLC",
    "https://www.google.com/#q=Wendy+Cloud+Fairway+Independent+Mortgage+Corporation",
    "https://www.google.com/#q=Kevin+Collman+Pilgrim+Mortgage+LLC",
    "https://www.google.com/#q=Prem+Janveja+loanDepot.com+LLC",
    "https://www.google.com/#q=Briana+Joiner+Amcap+Mortgage+Ltd.",
    "https://www.google.com/#q=Sergio+Moncada+CalCon+Mutual+Mortgage+LLC",
    "https://www.google.com/#q=Cassandra+Hug+Amcap+Mortgage+Ltd.",
    "https://www.google.com/#q=Michael+Harris+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Ginger+Smith+NTFN+INC.",
    "https://www.google.com/#q=Joseph+Salazar+Servis+One+Inc.",
    "https://www.google.com/#q=Brian+Bailey+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Raheel+Esmail+American+Financial+Network+Inc.",
    "https://www.google.com/#q=Heather+Barnes+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Jiangping+He+American+Interbanc+Mortgage+LLC.",
    "https://www.google.com/#q=Jason+Fulgham+Nations+Reliable+Lending+LLC",
    "https://www.google.com/#q=Micheal+Boyd+loanDepot.com+LLC",
    "https://www.google.com/#q=Austin+Reddin+CrossCountry+Mortgage+Inc.",
    "https://www.google.com/#q=Brian+Grisham+Pacific+Union+Financial+LLC",
    "https://www.google.com/#q=Debra+Starks+Caliber+Home+Loans+Inc.",
    "https://www.google.com/#q=Ethan+Johnson+American+Neighborhood+Mortgage+Acceptance+Company+LLC",
    "https://www.google.com/#q=Christopher+Parson+Guild+Mortgage+Company",
    "https://www.google.com/#q=Jacobo+Akle+State+Farm+Bank+F.S.B.",
    "https://www.google.com/#q=Joshua+Penrose+Freedom+Mortgage+Corporation",
    "https://www.google.com/#q=Isabeau+Reiske+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Tara+Stewart+Georgetown+Mortgage+LLC",
    "https://www.google.com/#q=Michael+Lamour+First+Direct+Lending+LLC",
    "https://www.google.com/#q=Thomas+Kollaja+Wyndham+Capital+Mortgage+Inc.",
    "https://www.google.com/#q=Elizabeth+Enriquez+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Richard+Jacquez+Legacy+Mortgage+LLC",
    "https://www.google.com/#q=Elliott+Watkins+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Amir+Salah-Esfahani+loanDepot.com+LLC",
    "https://www.google.com/#q=Rhett+McCown+American+Financial+Network+Inc.",
    "https://www.google.com/#q=Joe+Lai+Paramount+Equity+Mortgage+LLC",
    "https://www.google.com/#q=Phillip+Hagey+loanDepot.com+LLC",
    "https://www.google.com/#q=Alan+Adams+American+Advisors+Group",
    "https://www.google.com/#q=Andrew+Meyer+loanDepot.com+LLC",
    "https://www.google.com/#q=Andrew+Roberts+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Ryan+Smith+Advisors+Mortgage+Group+L.L.C.",
    "https://www.google.com/#q=Judith+Moore+New+Frontier+Financial+Inc.",
    "https://www.google.com/#q=Gary+Bosklopper+Pacific+Union+Financial+LLC",
    "https://www.google.com/#q=Casey+Holfus+Genpact+Mortgage+Services+Inc.",
    "https://www.google.com/#q=Brandt+Kidwell+Carrington+Mortgage+Services+LLC",
    "https://www.google.com/#q=Jack+Brousseau+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=Maria+Martins+Big+Horn+LTD",
    "https://www.google.com/#q=Lebaron+Hill+First+Direct+Lending+LLC",
    "https://www.google.com/#q=Timothy+Dossman+Royal+United+Mortgage+LLC",
    "https://www.google.com/#q=Jacqueline+O'Brien+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Jeremy+Mata+212+Loans+LLC",
    "https://www.google.com/#q=Julio+Molina+Longbridge+Financial+LLC",
    "https://www.google.com/#q=Nicholas+Johnson+New+Penn+Financial+LLC",
    "https://www.google.com/#q=Carmen+Clark+Amerisave+Mortgage+Corporation",
    "https://www.google.com/#q=Rittie+Searcy+Primary+Residential+Mortgage+Inc.",
    "https://www.google.com/#q=Zachary+Roberts+Mortgage+Research+Center+LLC",
    "https://www.google.com/#q=Mitchell+Rice+Paramount+Equity+Mortgage+LLC",
    "https://www.google.com/#q=Sidney+Karr+NTFN+INC.",
    "https://www.google.com/#q=Jeana+Nevarez+JNC+Mortgage+Company+Inc.",
    "https://www.google.com/#q=Jesus+Guerrero+Broker+Solutions+Inc.",
    "https://www.google.com/#q=Eileen+Casper+21st+Mortgage+Corporation",
    "https://www.google.com/#q=Luca+Centrone+Reverse+Mortgage+Funding+LLC",
    "https://www.google.com/#q=Adam+Chaney+Lakeview+Loan+Servicing+LLC"
];


$i=0;
urls.forEach(function (url) {

    $i++;
   var linkedinprofile = [];
    macro ="CODE: TAB T=1 \nURL GOTO="+url;
    iimPlay(macro);
     for(var j=1;j<11;j++)
    {
        looping = iimPlay("CODE: TAG POS="+j+" TYPE=CITE ATTR=TXT:* EXTRACT=TXT");
        var  str = iimGetExtract (looping);
         var totalurls= urls.length;
        iimDisplay("Running =>" + $i + " of =>" + totalurls);
        linkedinprofile.push(str);


     }
    linkedinprofile.forEach(function(element) {
        iimSet('url', url);
        iimSet('linkedinurl', element);

        var mm="CODE:";
        mm+="\nSET !ERRORIGNORE YES";
        mm+="\nFILEDELETE NAME=urls.csv";
        mm+="\nSET !ERRORIGNORE NO";
        mm+="\nADD !EXTRACT {{url}}";
        mm+="\nADD !EXTRACT {{linkedinurl}}";
        mm+="\nSAVEAS TYPE=EXTRACT FOLDER=G:\\xampp\\htdocs\\scraping\\googlesearch_linked_profile  FILE=urls.csv";
        iimPlay(mm);
    });

});


