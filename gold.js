

<html lang="ar">
<head>

<title>Body fat measure calculator</title>
<style>
            table{
              background-color: #a39c94;  
              font-size:20px;
              border: 1px solid #000;
              border-bottom:none;
              border-spacing: 0px;
            }
            tr{
                height:44px;
                

            }
            td{
                padding-left: 10px;
                padding-right: 10px;
                border-bottom:1px solid #000;
            }
        </style>
</head>
<body>
<center>
<table dir="rtl">
<tr> <td><span style="margin-left: 20px;">الجنس</span></td> <td><input checked="checked" id="female" name="Gender" onclick="Female();" type="radio" />امرأة
<input id="male" name="Gender" onclick="Male();" type="radio" />رجل</td> </tr>
<tr> <td><span style="margin-left: 20px;">الوزن</span></td> <td><input id="weight" onkeypress="return isNumber(event)" onkeyup="check()" style="width: 55px;" type="text" value="" /> كجم</td> </tr>
<tr> <td><span style="margin-left: 20px;">الطول</span></td> <td><input id="height" onkeypress="return isNumber(event)" onkeyup="check()" style="width: 55px;" type="text" value="" /> سم </td> </tr>
<tr><td colspan="2"><b>المقاسات:</b></td></tr>
<tr> <td><span style="margin-left: 20px;">الرقبة</span></td> <td><input id="neck" onkeypress="return isNumber(event)" onkeyup="check()" style="width: 55px;" type="text" value="" /> سم </td> </tr>
<tr> <td><span style="margin-left: 20px;">الوسط</span></td> <td><input id="abdomen" onkeypress="return isNumber(event)" onkeyup="check()" style="width: 55px;" type="text" value="" /> سم </td> </tr>
<tr id="hiprow"> <td><span style="margin-left: 20px;">المؤخرة</span></td> <td><input id="hip" onkeypress="return isNumber(event)" onkeyup="check()" style="width: 55px;" type="text" value="" /> سم </td> </tr>
<tr bgcolor="8c837c"> <td>نسبة الدهون</td> <td id="BodyFat" style="text-align: left;">0 %</td> </tr>
<tr bgcolor="8c837c"> <td>وزن الدهون</td> <td id="FatMass" style="text-align: left;">0 كجم</td> </tr>
<tr bgcolor="8c837c"> <td>وزن الكتلة اللادهنية</td> <td id="LeanMass" style="text-align: left;">0 كجم</td> </tr>
<tr bgcolor="8c837c"> <td>فئة الدهون</td> <td id="bfc" style="text-align: left;">Acceptable</td> </tr>
</table>
</center>
</body>
<script>
        function Male()
        {
            document.getElementById("hiprow").setAttribute( "style","visibility: hidden");
            check();
        }
        function Female()
        {
            document.getElementById("hiprow").setAttribute( "style","visibility: visible");
            check();
        }
        function check()
        {
            var bodyFat=document.getElementById("BodyFat");
            var fatMass=document.getElementById("FatMass");
            var leanMass=document.getElementById("LeanMass");
            var bfc=document.getElementById("bfc");
            bodyFat.innerHTML="";
            fatMass.innerHTML="";
            leanMass.innerHTML="";
            bfc.innerHTML="";
            if(document.getElementById("female").checked)
            {
                var bf=Math.round(495/ (1.29579 - .35004 * log10(parseInt(document.getElementById("abdomen").value)+parseInt(document.getElementById("hip").value)-parseInt(document.getElementById("neck").value))+.22100*log10(parseInt(document.getElementById("height").value)))-450);
                bodyFat.innerHTML=bf+" %";
                var fm=Math.round(bf/100*parseFloat(document.getElementById("weight").value));
                fatMass.innerHTML=fm+" &#1603;&#1580;&#1605;";
                leanMass.innerHTML=parseFloat(document.getElementById("weight").value-fm)+" &#1603;&#1580;&#1605;";
                if((9<parseInt(bf)) && (parseInt(bf)<14))
                {
                    bfc.innerHTML="&#1583;&#1607;&#1608;&#1606; &#1575;&#1587;&#1575;&#1587;&#1610;&#1577;";
                }
                else if ((13<parseInt(bf)) && (parseInt(bf)<21))
                {
                    bfc.innerHTML="&#1585;&#1610;&#1575;&#1590;&#1610; &#1605;&#1581;&#1578;&#1585;&#1601;";
                }
                else if ((20<parseInt(bf)) && (parseInt(bf)<25))
                {
                    bfc.innerHTML="&#1601;&#1578;&#1606;&#1587;";
                }
                else if ((24<parseInt(bf)) && (parseInt(bf)<32))
                {
                    bfc.innerHTML="&#1605;&#1578;&#1608;&#1587;&#1591;";
                }
                else if (31<parseInt(bf))
                {
                    bfc.innerHTML="&#1587;&#1605;&#1610;&#1606;";
                }
                else
                {
                    bfc.innerHTML="";
                }
            }
            else
            {
                var bf=Math.round(495/ (1.0324 - .19077 * log10(parseFloat(document.getElementById("abdomen").value)-parseFloat(document.getElementById("neck").value))+ .15456*log10(parseFloat(document.getElementById("height").value)))-450);
                bodyFat.innerHTML=bf+" %";
                var fm=Math.round(bf/100*parseFloat(document.getElementById("weight").value));
                fatMass.innerHTML=fm+" &#1603;&#1580;&#1605;";
                leanMass.innerHTML=parseFloat(document.getElementById("weight").value-fm)+" &#1603;&#1580;&#1605;";
                if((1<parseInt(bf)) && (parseInt(bf)<6))
                {
                    bfc.innerHTML="&#1583;&#1607;&#1608;&#1606; &#1575;&#1587;&#1575;&#1587;&#1610;&#1577;";
                }
                else if ((5<parseInt(bf)) && (parseInt(bf)<14))
                {
                    bfc.innerHTML="&#1585;&#1610;&#1575;&#1590;&#1610; &#1605;&#1581;&#1578;&#1585;&#1601;";
                }
                else if ((13<parseInt(bf)) && (parseInt(bf)<18))
                {
                    bfc.innerHTML="&#1601;&#1578;&#1606;&#1587;";
                }
                else if ((17<parseInt(bf)) && (parseInt(bf)<25))
                {
                    bfc.innerHTML="&#1605;&#1578;&#1608;&#1587;&#1591;";
                }
                else if (24<parseInt(bf))
                {
                    bfc.innerHTML="&#1587;&#1605;&#1610;&#1606;";
                }
                else
                {
                    bfc.innerHTML="";
                }
            }
        
        }
        function isNumber(evt)
        {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
            {
                return false;
            }
            return true;
        }
        function log10(val) {
        return Math.log(val) / Math.LN10;
        }
        check();
       
    </script>
    <a href="https://kokabalmohtarefin.blogspot.com/" target="_blank" rel"Dofollow">كوكب المحترفين</a>


</html>
