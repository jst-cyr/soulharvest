#
#
#
use strict;
use CGI qw(:standard);

print header;
print start_html("Thank you");
print <<END_of_start;
        <!--#include virtual="/~soulharvest/include/responseHeader.html"-->
END_of_start

   my $to = soulharvest@ottawa.com;
   my $from = param("email");
   my $subject = param("subject");
   my $band = param("band");
   my $website = param("website");
   my $email = param("website");

   my $message = $band\n$website\n$email;

   #SEND THE MESSAGE (see p 21 of Learning Perl)
   open MAIL, " |mail $to";
   print MAIL "Subject: $subject\n\nBody:\n$message";
   close MAIL;

   #SEND AUTO-RESPONSE
   #open MAIL, " |mail $from";
   #print MAIL "Subject: $autoReplySubj\n\nBody:\n$autoReply";
   #close MAIL;

  print "<center>";
  print "<h1>Thank you for your submission</h1>";
  print "<blockquote><blockquote>We will be contacting you shortly";

  print hr();
  print start_form();
  print p("Artist/Band name: ", textfield($band));
  print p("Website: ", textfield($website));
  print p("email: ", textfield($email));
  print end_form(
  print hr();
  print "</blockquote></blockquote></center>";
}

#################
print <<END_of_en
        <!--#include virtual="/~soulharvest/include/responseFooter.html"-->
END_of_end
print end_html;