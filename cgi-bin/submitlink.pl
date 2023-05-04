#!/usr/bin/perl

require "../cgi-lib.pl";

$web_directory_administrator='jstcyr@ottawa.com';


#READ FORM
&ReadParse;

#SEND SUBMISSION BY EMAIL TO ADMINISTRATOR

open (MAIL,"| /bin/mailx -s\"Web Directory Link Submission\" $web_directory_administrator") || die "Can't open mail for submission!!";

$category=$in{category};
$url=$in{url};
$description=$in{description};
$title=$in{title};
$name=$in{name};
$email=$in{email};

print MAIL "
 
Submitted by:
  Name: $name
  E-mail: $email

Suggested link:
  CATEGORY: $category
  URL: $url
  TITLE: $title
  DESCRIPTION: $description
"; 


#OUTPUT APPROPRIATE RESPONSE TO USER
print &PrintHeader;
&include_header;

print "
 
<h3>Submitted by:</h3>
<blockquote>
      <b>Name:</b> $name
<br>  <b>E-mail:</b> $email
</blockquote>

<br><br><br>
<h3>Suggested link:</h3>
<blockquote>
      <b>CATEGORY:</b> $category
<br>  <b>URL:</b> $url
<br>  <b>TITLE:</b> $title
<br>  <b>DESCRIPTION:</b> $description
</blockquote>";

&include_footer;


################## METHODS #########################

sub include_header
{
  open (HEADER , "../../undergrad/header.html");
  while(<HEADER>){print $_;}
  close HEADER;

  print "
  <tr>
   <TD width-\"100%\" valign=\"top\" colspan=2>

   <blockquote>
   <font face=\"arial,helvetica\" size=-1>";
}

sub include_footer
{
  print "
   </font>
   </blockquote>
   </TD>

  </tr>";

  open (FOOTER , "../../undergrad/footer.html");
  while(<FOOTER>){print $_;}
  close FOOTER;

}
