#!/usr/bin/perl

#############################################################################
##   JInventory version 0.3                                                ##
##                                                                         ##
##                 Developed by:          Jason St-Cyr (jstcyr@ottawa.com) ##
##                 Creation date:         July 2, 1999                     ##
##                 Last modified:         July 29, 1999                    ##
##                                                                         ##
##                 Code History:                                           ##
##                  July 2,1999:          version 0.1 started.             ##
##                  July 7,1999:          Basic interface & form designed, ##
##                                        added to code.                   ##
##                  July 8,1999:          Add/Retrieve methods functional. ##
##                  July 9,1999:          version 0.1 completed.           ##
##                                        Allows for inventory listing,    ##
##                                        adding, modifications, etc.      ##
##                  July 12,1999:         version 0.2 started              ##
##                                        modifications made to add        ##
##                                        more product information         ##
##                  July 13,1999:         Modifications complete.          ##
##                  July 14,1999:         Cancel option added to delete    ##
##                                        Date retrieval modified          ##
##                  July 20,1999:         version 0.3 started              ##
##                                        adding in dynamic options        ##
##                  July 21,1999:         Edited Save Changes code         ##
##                                        can now delete information and   ##
##                                        save a blank entry box now       ##
##                                        Added Checked Out functionality  ##
##                  July 26,1999:         Completed Check Out System       ##
##                                        Software tracking system started ##
##                                        Hardware Repairs info added      ##
##                  July 28,1999:         Implementation of item type      ##
##                                        code (software,hardware)         ##
##                  July 29,1999:         Fixed serial whitespace bug      ##
##                                        Enhanced Check Out System        ##
##                                                                         ##
##                                                                         ##
##  SETUP:                                                                 ##
##       1.Place the inventory script in your cgi-bin directory            ##
##       2.Place cgi-lib.pl in the same directory, or change the path      ##
##         to cgi-lib.pl.                                                  ##
##       3.The HTML page can be placed anywhere on your site, so long      ##
##         As you've set up the cgi-bin alias properly                     ##
##       4.Create an 'inventorydb' directory at the same level as your     ##
##         cgi-bin directory, or change the path to $database_dir          ##
##       5.Create a 'conf' sub-directory in your database directory        ##
##         to store the config files needed to customize your site         ##
##       6.Make the necessary modifications to the file in order to        ##
##         customize it to your site:                                      ##
##                - $body_tag    = customize your look                     ##
##                - $title       = use your group or site's name           ##
##                - $home_ref    = the path to link back to your home page ##
##                - $script_path = path to the inventory scrip             ##
##                                 If you alter it, remember to change     ##
##                                 the HTML page as well                   ##
##                - $location_options_file =                               ##
##                                 path to file with list of possible      ##
##                                 locations for inventory                 ##
##                - $status_options_file                                   ##
##                               = path to file with list of possible      ##
##                                 choices for inventory status            ##
##                - $status_descriptions_file                              ##
##                               = descriptions for each status            ##
##                - $type_options_file                                     ##
##                               = path to file with list of possible      ##
##                                 item types (software, hardware)         ##
##                - $os_options_file                                       ##
##                               = path to file with list of possible      ##
##                                 software os's (NT, Unix, Linus)         ##
##                - $year_start  = farthest year back for inventory        ##
##                - $year_limit  = farthest year forward for inventory     ##


$script_path="/cgi-bin/inventory_0_3.pl";
$database_dir= "../inventorydb";
$body_tag= "<BODY bgcolor=#333333 text=#FFFFFF link=#44CCFF vlink=#7777f7 alink=#FF0000>";
$title="School of Computer Science";
$home_ref="/inventory";
$location_options_file="$database_dir/conf/locations.txt";
$status_options_file="$database_dir/conf/status.txt";
$status_descriptions_file="$database_dir/conf/status_description.txt";
$type_options_file="$database_dir/conf/types.txt";
$os_options_file="$database_dir/conf/os.txt";
$year_start=1978;
$year_limit=2000;


#USE YOUR PATH TO cgi-lib.pl
require "cgi-lib.pl";


##                                                                         ##
##                                                                         ##
####################END OF CUSTOMIZATION/ START OF SCRIPT####################



#READ FORM AND BEGIN HTML OUTPUT
&ReadParse;

#SET UP FOR OUTPUT
print &PrintHeader;
print &HtmlTop("$title - Inventory System - $in{button}");

#OUTPUT HEADER FILE
&include_header;

#CHECK FOR FUNCTION TO EXECUTE

#If wanting to add, check serial number is entered 
#and then output adding form
if($in{button} eq "Add New Item")
{
    &check_serial;
    if($in{type} eq ""){&select_type;}
    else{&add_form;}
}

#If adding, check form is filled out then add to database
if($in{button} eq "Submit")
{
    &check_form;
    &add;
}

#Get the item and display it to the screen
if(($in{button} eq "View")||($in{button} eq "Cancel"))
{
    &retrieve;
}

#When saving, check form if filled out and save
if($in{button} eq "Save Changes")
{
    &check_form;
    &save;
    print "<h3>Changes saved to Inventory Item (#$serial)</h3>";
    &output_item;
}

#If deleting, confirm delete. If confirmed, delete.
if($in{button} eq "Delete")
{
    &confirm_delete;
}

#If retrieving item, check serial was entered, then retrieve
if($in{button} eq "Retrieve Item")
{
    &check_serial;
    &retrieve;
}

#When viewing inventory, call list function to display
if($in{button} eq "View Inventory")
{
    &list;
}

#View list of check outs.
if($in{button} eq "Check Outs")
{
    &check_out;
}

#Save check out information
if( ($in{button} eq "Check Out Item")|| ($in{button} eq "Return Item") )
{

    if(($in{checked_out} eq "yes")&& ($in{checked_out_by} eq ""))
    {
      $error="You must fill out the name of whom the item will be checked out to";
      &output_error;
      exit;
    }
    $serial= $in{serial};
    &load;
    $checked_out=$in{checked_out};
    if($checked_out eq "yes"){$checked_out_by=$in{checked_out_by};}
    else{$checked_out_by="";}
    &save;
    &check_out;
}

#CLOSE OFF HTML OUTPUT
print &HtmlBot;


#########################METHODS#################################

########################################################################
# check_serial: Checks to make sure the serial number has been entered #
########################################################################
sub check_serial
{
    if($in{serial} eq "")
    {
	$error="You must fill out the SERIAL NUMBER field";
	&output_error;
	exit;
    }
}


################################################################################
# check_form: Checks submission made by add_form and changes made in retrieval #
################################################################################
sub check_form
{

    #Assign variables
    $serial=$in{serial};
    $serial2=$in{serial2};
    $description=$in{description};
    $location=$in{location};
    $value=$in{value};
    $status=$in{status};
    $checked_out=$in{checked_out};
    if($checked_out eq "yes"){ $checked_out_by=$in{checked_out_by};}
    else{$checked_out_by="";}

    if($in{month_purchased} ne "mm"){$month_purchased=$in{month_purchased};}
    if($in{day_purchased} ne "dd"){$day_purchased=$in{day_purchased};}
    if($in{year_purchased} ne "yyyy"){$year_purchased=$in{year_purchased};}
    $purchased=$month_purchased."/".$day_purchased."/".$year_purchased;
    if($purchased eq "//"){$purchased="";}
    
    if($in{month_expires} ne "mm"){$month_expires=$in{month_expires};}
    if($in{day_expires} ne "dd"){$day_expires=$in{day_expires};}
    if($in{year_expires} ne "yyyy"){$year_expires=$in{year_expires};}
    $expires=$month_expires."/".$day_expires."/".$year_expires;
    if($expires eq "//"){$expires="";}

    $type=$in{type};
    if($type eq "Hardware")
    {
      if($in{month_repaired} ne "mm"){$month_repaired=$in{month_repaired};}
      if($in{day_repaired} ne "dd"){$day_repaired=$in{day_repaired};}
      if($in{year_repaired} ne "yyyy"){$year_repaired=$in{year_repaired};}
      $repaired=$month_repaired."/".$day_repaired."/".$year_repaired;
    }
    if($type eq "Software")
    {    
      $number_of_licenses=$in{number_of_licenses};
      $type_of_license=$in{type_of_license};
      $version=$in{version};
      $os=$in{os};
      $software_info=$number_of_licenses."/".$type_of_license."/".$version."/".$os;
    }

    $order_num=$in{order_num};
    $vendor=$in{vendor};
    $contact_name=$in{contact_name};
    $contact_phone=$in{contact_phone};
    $contact_email=$in{contact_email};
    $contact_url=$in{contact_url};

    #Check that required fields are filled
    $error="";
    if($serial eq ""){$error.="<br>There is no serial number?";}
    if($description eq ""){$error.="<br>You did not fill in the description of the item.";} 
    if($location eq ""){$error.="<br>You did not fill in the location of the item.";}
    if($error ne ""){&output_error; exit;}
}


###############################################################################
# retrieve: gets file from the database by using the serial number as the key #
###############################################################################
sub retrieve
{
    #Assign variables
    $serial=$in{serial};

    #Check if item exists in database
    unless(-e "$database_dir/$serial.inv")
    {
	$error="There is no item in the inventory under that serial number.  Check the serial number and try again.";
	&output_error;
	exit;
    }   
 
    &load;

    #Output item and change form
    print "<h2>$type Inventory Item (#$serial)</h2>";
    print "<table width=100% border=0 cellpadding=5 cellspacing=5><tr valign=top><td>";
    &output_item;
    print "</td><td>";
    &output_form;
    print "<input type=hidden name=serial value=\"$serial\">\n
           <input type=hidden name=confirmation value=\"no\">\n
           <input type=submit name=button value=\"Save Changes\">\n
           <input type=submit name=button value=\"Delete\">";
    print "</form></blockquote></td></tr></table>";
}


#######################################################################################
# load: Reads all the information from the file into an array and assigns to variables #
#######################################################################################
sub load
{
    open (FILE, "$database_dir/$serial.inv");
    $i=0;
    while(<FILE>){chomp;@file[$i++]=$_;}
    close FILE;
    $serial2=@file[1];
    $description=@file[2];
    $location=@file[3];
    $value=@file[4];
    $status=@file[5];
    ($month_purchased, $day_purchased, $year_purchased)= split (/\//,@file[6]);
    ($month_expires,$day_expires,$year_expires)= split (/\//,@file[7]);

    $order_num=@file[8];
    $vendor=@file[9];
    $contact_name=@file[10];
    $contact_phone=@file[11];
    $contact_email=@file[12];
    $contact_url=@file[13];

    $checked_out=@file[14];
    $checked_out_by=@file[15];

    $type=@file[16];
    if($type eq "Hardware"){($month_repaired, $day_repaired, $year_repaired)= split (/\//,@file[17]);}
    if($type eq "Software"){($number_of_licenses,$type_of_license,$version,$os)= split(/\//,@file[17]);}
}


###########################################################################
# save: Takes the changes to the item's info and writes to the database #
###########################################################################
sub save
{

    #CODE TO WRITE ALL CHANGES TO FILE

    open (FILE, ">$database_dir/$serial.inv");
 
    print FILE "$serial\n";
    print FILE "$serial2\n";
    print FILE "$description\n";
    print FILE "$location\n";
    print FILE "$value\n";
    print FILE "$status\n";

    print FILE "$purchased\n";
    print FILE "$expires\n";
    print FILE "$order_num\n";
    print FILE "$vendor\n";

    print FILE "$contact_name\n";
    print FILE "$contact_phone\n";
    print FILE "$contact_email\n";
    print FILE "$contact_url\n";
    
    print FILE "$checked_out\n";
    print FILE "$checked_out_by\n";
    
    print FILE "$type\n";
    if($type eq "Hardware"){print FILE "$repaired\n";}
    if($type eq "Software"){print FILE "$software_info\n";}
    close FILE;


}


#############################################################################
# confirm_delete: Confirms that user really wishes to delete inventory item #
#############################################################################
sub confirm_delete
{
    if($in{confirmation} eq "no")
    {
    #Assign variables
    $serial=$in{serial};
    $serial2=$in{serial2};
    $description=$in{description};
    $location=$in{location};
    $value=$in{value};
    $status=$in{status};

    print "<h3>Do you really wish to delete this inventory item?</h3>";
    &output_item;
    print "
           <form name=form1 action=\"$script_path\" method=post>
             <input type=submit value=Cancel name=button><input type=submit value=Delete name=button>
             <input type=hidden value=yes name=confirmation>
             <input type=hidden value=\"$serial\" name=serial>
           </form>";
    }
    else{ `rm "$database_dir/$in{serial}.inv"`; print "<h3>ITEM DELETED! Return to the home page to continue</h3>";}
     
}


######################################################################
# select_type: Select which type of item is to be added to inventory #
######################################################################
sub select_type
{
  #Assign variables
  $serial=$in{serial};

  #Read in types
  $i=0;
  open (TYPES, "$type_options_file");
  while(<TYPES>){chomp;@types[$i++]=$_;}
  close TYPES;

  #Print out form
  print "
         <h2>Step 1:Select Type for New Item (#$serial)</h2>
         <FORM name=form1 action=\"$script_path\" method=post>
         <INPUT type=hidden name=serial value=\"$serial\">
         <SELECT name=type>\n";
  for($i=0;$i<=$#types;$i++){print "<OPTION value=\"@types[$i]\">@types[$i]\n";}
  print "
         </SELECT>
         <INPUT type=submit name=button value=\"Add New Item\">
         </FORM>
          <p>
          <b>You must select which type of item you would like to add to the inventory before proceeding with entering the information</b>";

}



#################################################################################
# add_form: Outputs the form to allow a user to add a new item to the inventory #
#################################################################################
sub add_form
{
   
    #Assign variables
    $serial=$in{serial};
    $type=$in{type};

    #Check if item exists in database
    if(-e "$database_dir/$serial.inv")
    {
	$error = "There is already an item in the inventory under that serial number.  Check the serial number and try again.";
	&output_error;
	exit;
    }   

    #Output adding form
    print "<h2> Step 2: Add New $type Item Information(#$serial)</h2>";
    &output_form;
    print "<input type=hidden name=serial value=\"$serial\">\n\n<input type=submit name=button value=Submit></form>";
}



    

####################################################
# add: Adds the info to the database as a new item #
####################################################
sub add
{
    &save;

    print "<h3>Item submitted to Inventory</h3>";
    &output_item;

}


#########################################################################
# list: Lists all inventory by sorting and viewing parameters passed in #
#########################################################################
sub list
{
    #Get all inventory files
    @all= glob ("$database_dir/*.inv");

    #Get listing and sorting parameters
    $listing=$in{view};
    $sort=$in{sort};
 
    #From @all, select which files to view
    if($listing eq "all"){&view_all;}
    else{&view_selected;}

    #From @files, sort by $sort. Already sorted by serial. (filename is serial)
    if($sort ne "serial"){&sort_files;}
   
    #Begin outputting form for selecting viewing and sorting parameters
    print"
    <FORM action=\"$script_path\" method=post>
    <table border=0>
     <tr>
     <td>
     <b>View:</b>
     <SELECT name=view>
      <OPTION value=all ";


    #READ OPTIONS FOR LOCATION AND STATUS and READ DESCRIPTIONS
    $i=0;
    open (FILE, "$status_options_file");
    while(<FILE>){chomp; @status_options[$i++]=$_;}
    close FILE;

    #CHECK TO SEE WHICH OPTION WAS CHOSEN PREVIOUSLY AND SELECT IT
    if($listing eq "all"){print "SELECTED";}
    print ">All\n";


    for($i=0;$i<=$#status_options;$i++)
    {
      print "<OPTION value=@status_options[$i] ";
      if($listing eq "@status_options[$i]"){print "SELECTED";}
      print ">@status_options[$i]\n";
    }
    print "
     </SELECT>
     </td><td>
     <b>Sort by:</b>
     <SELECT name=sort>
      <OPTION value=serial ";

    #CHECK TO SEE WHICH OPTION WAS CHOSEN PREVIOUSLY AND SELECT IT
    if($sort eq "serial"){print "SELECTED";}
    print ">Serial
      <OPTION value=description ";
    if($sort eq "description"){print "SELECTED";}
    print ">Description
      <OPTION value=location ";
    if($sort eq "location"){print "SELECTED";}
    print ">Location
      <OPTION value=status ";
    if($sort eq "status"){print "SELECTED";}
    print ">Status
      <OPTION value=type  ";
    if($sort eq "type"){print "SELECTED";}
    print ">Item Type
      <OPTION value=checked_out  ";
    if($sort eq "checked_out"){print "SELECTED";}
    print ">Checked Out
     </SELECT>
     </td>
     </tr>
     <tr>
     <td colspan=2>

     <INPUT TYPE=submit name=button value=\"View Inventory\">
     </td>
     </tr>
     </table>
     </FORM>\n\n

     <table border=0 width=100%>
     <tr>
      <TH align=left>SERIAL</TH>
      <TH align=left>DESCRIPTION</TH>
      <TH align=left>LOCATION</TH>
      <TH align=left>STATUS</TH>
      <TH align=left>ITEM TYPE</TH>
      <TH align=left>CHECKED OUT</TH>
     </tr>";

    ##OUTPUT SORTED LIST OF FILES
    for($i=0;$i<=$#files;$i++)
    {
        open (FILE, "@files[$i]");
        $j=0;
        while(<FILE>){chomp;@array[$j++]=$_; }
        $serial=@array[0];
        $description=@array[2];
        $location=@array[3];
        $status=@array[5];
	$checked_out_by=@array[15];
	$type=@array[16];

	#Check for whitespaces in serial and convert for link
        $_=$serial;
        @split_serial=split;
        $link="";
        if ($#split_serial>0)
	{
	    for($j=0;$j<$#split_serial;$j++){$link.="@split_serial[$j]%20";}
            $link.=@split_serial[$#split_serial];
        }
        else{$link=$serial;}

        $href="$script_path?button=View&serial=$link";
        print "<tr><td><a href=\"$href\">$serial</a></td><td>$description</td><td>$location</td><td>$status</td><td>$type</td><td>$checked_out_by</td></tr>\n";
    }
    print "</table>";

}

##################################################################
# view_all: Lists all the items in the database on one HTML page #
##################################################################
sub view_all
{
    for($i=0;$i<=$#all;$i++){@files[$i]=@all[$i];}
}


###################################################################################################
# view_selected: Lists items by $listing selection parameter (current, disposal, unsold, or sold) #
###################################################################################################
sub view_selected
{
    $k=0;
    for($i=0;$i<=$#all;$i++)
    {
	open (FILE, "@all[$i]");
        $j=0;
	while(<FILE>){chomp;@array[$j++]=$_;}
	close FILE;
        #N.B. @array[5] is the status
        if(@array[5] eq $listing){@files[$k++]=@all[$i];}
    }
}


################################################################
# sort_files: Sorts items by description, location,  or status #
################################################################
sub sort_files
{

    #Choose which line of file to sort by
    if($sort eq "description"){$choice=2;}
    elsif($sort eq "location"){$choice=3;}
    elsif($sort eq "status"){$choice=5;}
    elsif($sort eq "checked_out"){$choice=15;}
    elsif($sort eq "type"){$choice=16;}

    #Add sorting parameter to front of file name to sort
    for($i=0;$i<=$#files;$i++)
    {
	open (FILE, "@files[$i]");
        $j=0;
        while(<FILE>){chomp; @content[$j++]=$_;}
        @temp[$i]=@content[$choice]."~".@files[$i];
    }
    
    #Sort files
    @files= sort {$a cmp $b } @temp;
   
    #Get rid of leading sorting parameter and restore file names
    for($i=0;$i<=$#files;$i++)
    {
	@line= split(/~/,@files[$i]);
        @files[$i]=@line[1];
    }

}

#######################################################
# check_out:  List all items checked out or available #
#######################################################
sub check_out
{
    #Get all inventory files
    $num_checked=0;
    $num_available=0;
    @all= glob ("$database_dir/*.inv");

    #Separate files into 2 groups: available and checked out
    for($i=0;$i<=$#all;$i++)
    {
      $j=0;
      open (FILE, "@all[$i]");
      while(<FILE>){chomp; @array[$j++]=$_;}

      $_=@array[0];
      @split_serial=split;
      $link="";
      if ($#split_serial>0)
      {
	  for($j=0;$j<$#split_serial;$j++){$link.="@split_serial[$j]%20";}
          $link.=@split_serial[$#split_serial];
      }
      else{$link=@array[0];}

      $href="$script_path?button=View&serial=$link";
      $summary="<tr><td><a href=\"$href\">@array[0]</a></td><td>@array[2]</td><td>@array[15]</td></tr>";
      if(@array[14] eq "yes"){@checked[$num_checked++]=$summary;@serials1[$num_checked-1]=@array[0]}
      else{@available[$num_available++]=$summary;@serials2[$num_available-1]=@array[0];}
    }

    #Print out both tables side by side
    &output_check_out_table;
}




###########OUTPUT ROUTINES############################
sub output_error{ print "<blockquote><H3>$error</H3></blockquote>"; print &HtmlBot;}

sub include_header
{
  print "
         $body_tag
         <a href=\"$home_ref\"><img src=\"$home_ref/computerchip.gif\" border=0 alt=\"HOME\"><br>HOME</a>
";
}

sub output_item
{
    print "
    <table border=0 cellpadding=10 cellspacing=0>\n
     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Serial#:</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$serial</font></td>\n
     </tr>\n
 
     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Secondary Serial#:</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$serial2</font></td>\n
     </tr>\n

     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Description:</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$description</font></td>\n
     </tr>\n

     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Location:</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$location</font></td>\n
     </tr>\n

     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Value: \$</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$value</font></td>\n
     </tr>\n

     <tr valign=top>\n
      <td bgcolor=#FFFFE0 align=right width=50><font face=arial,helvetica color=#000000>Status:</font></td>\n
      <td bgcolor=#000000><font face=arial,helvetica>$status</font></td>\n
     </tr>\n
    </table>\n";
}

sub output_form
{

    #READ OPTIONS FOR LOCATION AND STATUS and READ DESCRIPTIONS
    $i=0;
    open (FILE, "$status_options_file");
    while(<FILE>){chomp; @status_options[$i++]=$_;}
    close FILE;

    $i=0;
    open (FILE, "$location_options_file");
    while(<FILE>){chomp; @location_options[$i++]=$_;}
    close FILE;


    $i=0;
    open (FILE, "$status_descriptions_file");
    while(<FILE>){chomp;@status_descriptions[$i++]=$_;}
    close FILE;

    $i=0;
    open (FILE, "$os_options_file");
    while(<FILE>){chomp;@os_options[$i++]=$_;}
    close FILE;


    #BEGIN PRINTING FORM
    print "
    <blockquote>
        <p>
        <b>NOTE:</b> All items marked with a <font color=\"#FF0000\">*</font> are required fields.
        <p>
      <form name=\"form1\" action=\"$script_path\" method=\"post\">
      <input name=type type=hidden value=\"$type\">
        <table>
         <tr>
          <td align=\"right\">Secondary serial#:</td>
          <td><input name=\"serial2\" type=\"text\" size=\"20\" value=\"$serial2\"></td>
         </tr>
         <tr>
          <td align=\"right\"><font color=\"#FF0000\">*</font>Description:</td>
          <td><input name=\"description\" type=\"text\" size=\"40\" value=\"$description\">";

    if($type eq "Software")
    {
      print "&nbsp;&nbsp; Version:<input name=\"version\" type=\"text\" size=\"5\" value=\"$version\">";
      print "
         <tr>
          <td align=\"right\">Description:</td>
          <td><SELECT name=\"os\">";
      for($i=0;$i<=$#os_options;$i++)
      {
	print "<OPTION value=\"@os_options[$i]\" ";
	if($os eq @os_options[$i]){print "SELECTED";}
	print ">@os_options[$i]\n";
      }
      print "
              </SELECT>
           </td>
         </tr>";
    }

    print "
         </td>
         </tr>
         <tr>
          <td align=\"right\"><font color=\"#FF0000\">*</font>Location:</td>
          <td><SELECT name=\"location\">";

    #PRINT OUT LOCATION OPTIONS
    for($i=0;$i<=$#location_options;$i++)
    {
      print "<OPTION value=\"@location_options[$i]\" ";
      if($location eq @location_options[$i]){print "SELECTED";}
      print ">@location_options[$i]\n";
    }

    print "
       </SELECT>
          </td>
         </tr>
	 <tr>
          <td align=\"right\">Value: \$</td>
          <td><input name=\"value\" type=\"text\" size=\"10\" value=\"$value\"></td>
         </tr>
	 <tr>
          <td align=\"right\"><font color=\"#FF0000\">*</font>Status:</td>
          <td><SELECT name=\"status\">";

    #PRINT OUT STATUS OPTIONS
    for($i=0;$i<=$#status_options;$i++)
    {
      print "<OPTION value=\"@status_options[$i]\" ";
      if($status eq @status_options[$i]){print "SELECTED";}
      print ">@status_options[$i]\n";
    }

    print "
              </SELECT>
          </td>
         </tr>
	 <tr>
          <td></td>
          <td><ol>";

    #PRINT OUT STATUS DESCRIPTIONS
    for($i=0;$i<=$#status_descriptions;$i++)
    {
      print "<li><b>@status_options[$i] - </b>@status_descriptions[$i] ";
    }

    print "
	     </ol>
          </td>
         </tr>";

    #PRINT OUT LOANING INFORMATION
    print"
         <tr>
          <td align=\"right\">
            <INPUT type=\"CHECKBOX\" NAME=\"checked_out\" value=\"yes\" ";
    
            if($checked_out eq "yes"){print "CHECKED";}

    print ">Checked out</td>
           <td>
            <INPUT type=\"text\" name=\"checked_out_by\" value=\"$checked_out_by\" size=\"40\">
           </td>
          </tr>";


    #Begin printing purchase info
    print "
	 <tr><td colspan=2><b>Purchase info:</b></td></tr>
         <tr>
          <td align=right>Date purchased:</td>
          <td>
            <SELECT name=\"month_purchased\">
              <OPTION value=mm>mm\n";

    #PRINT OUT MONTH PURCHASED OPTIONS
    for($i=1;$i<=12;$i++)
    {
      $selected="";
      if($i<10){ $month="0$i";}
      else { $month="$i";}
      if($month_purchased eq $month){$selected= "SELECTED";}
      print "
              <OPTION value=$month $selected>$month\n";
    }

    print "
            </SELECT>/
            <SELECT name=\"day_purchased\">
              <OPTION value=dd>dd\n";

    #PRINT OUT DAY PURCHASED OPTIONS
    for($i=1;$i<=31;$i++)
    {
      $selected="";
      if($i<10){ $day="0$i";}
      else { $day="$i";}
      if($day_purchased eq $day){$selected= "SELECTED";}
      print "
              <OPTION value=$day $selected>$day\n";
    }

    print "   
            </SELECT>/

            <SELECT name=\"year_purchased\">
              <OPTION value=yyyy>yyyy";

    #PRINT OUT YEAR PURCHASED OPTIONS
    for($i=$year_start;$i<=$year_limit;$i++)
    {
      $selected="";
      if($year_purchased eq $i){$selected= "SELECTED";}
      print "<OPTION value=$i $selected>$i\n";
    }

    print "  
            </SELECT>
          </td>
         </tr>

         <tr>
          <td align=right>Warranty Expiry:</td>

          <td>
            <SELECT name=\"month_expires\">
              <OPTION value=mm>mm\n";

    #PRINT OUT MONTH EXPIRES OPTIONS
    for($i=1;$i<=12;$i++)
    {
      $selected="";
      if($i<10){ $month="0$i";}
      else { $month="$i";}
      if($month_expires eq $month){$selected= "SELECTED";}
      print "
              <OPTION value=$month $selected>$month\n";
    }

    print "
            </SELECT>/
            <SELECT name=\"day_expires\">
              <OPTION value=dd>dd\n";

    #PRINT OUT DAY EXPIRES OPTIONS
    for($i=1;$i<=31;$i++)
    {
      $selected="";
      if($i<10){ $day="0$i";}
      else { $day="$i";}
      if($day_expires eq $day){$selected= "SELECTED";}
      print "
              <OPTION value=$day $selected>$day\n";
    }

    print "   
            </SELECT>/
            <SELECT name=\"year_expires\">
              <OPTION value=yyyy>yyyy";


    #PRINT OUT YEAR EXPIRES OPTIONS
    for($i=$year_start;$i<=$year_limit;$i++)
    {
      $selected="";
      if($year_expires eq $i){$selected= "SELECTED";}
      print "
              <OPTION value=$i $selected>$i\n";
    }

    print "
             </SELECT>
            </td>
           </tr>\n";

    if($type eq "Hardware")
    {
      print"
         <tr>
          <td align=right>Last Repaired:</td>

          <td>
            <SELECT name=\"month_repaired\">
              <OPTION value=mm>mm\n";

      #PRINT OUT MONTH REPAIRED OPTIONS
      for($i=1;$i<=12;$i++)
      {
	$selected="";
	if($i<10){ $month="0$i";}
	else { $month="$i";}
	if($month_repaired eq $month){$selected= "SELECTED";}
	print "
              <OPTION value=$month $selected>$month\n";
      }

      print "
            </SELECT>/
            <SELECT name=\"day_repaired\">
              <OPTION value=dd>dd\n";

      #PRINT OUT DAY REPAIRED OPTIONS
      for($i=1;$i<=31;$i++)
      {
	$selected="";
	if($i<10){ $day="0$i";}
	else { $day="$i";}
	if($day_repaired eq $day){$selected= "SELECTED";}
	print "
              <OPTION value=$day $selected>$day\n";
      }

      print "   
            </SELECT>/
            <SELECT name=\"year_repaired\">
              <OPTION value=yyyy>yyyy";


      #PRINT OUT YEAR REPAIRED OPTIONS
      for($i=$year_start;$i<=$year_limit;$i++)
      {
	$selected="";
	if($year_repaired eq $i){$selected= "SELECTED";}
	print "
              <OPTION value=$i $selected>$i\n";
      }
      print "
           </SELECT>
           </td>
          </tr>";
    }
    if($type eq "Software")
    {
      print "
          <tr>
           <td align=right># of licenses:</td>
           <td><input name=number_of_licenses type=text size=10 maxlength=20 value=\"$number_of_licenses\"></td>
          </tr>
          <tr>
           <td align=right>License type:</td>
           <td><input name=type_of_license type=text size=40 maxlength=80 value=\"$type_of_license\"></td>
          </tr>";
    }


    #PRINT OUT REMAINING PRODUCT INFO
    print "
         <tr>
          <td align=right>Order #:</td>
          <td><input name=order_num type=text size=20 maxlength=40 value=\"$order_num\"></td>
         </tr>

         <tr>
          <td align=right>Vendor:</td>
          <td><input name=vendor type=text size=40 maxlength=80 value=\"$vendor\"></td>
         </tr>

         <tr><td colspan=2><b>Contact:</b></td></tr>

         <tr>
          <td align=right>Name:</td>
          <td><input name=contact_name type=text size=40 maxlength=80 value=\"$contact_name\"></td>
         </tr>
   
         <tr>
          <td align=right>Phone:</td>
          <td><input name=contact_phone type=text size=40 maxlength=80 value=\"$contact_phone\"></td>
         </tr>

         <tr>
          <td align=right>Email:</td>
          <td><input name=contact_email type=text size=40 maxlength=80 value=\"$contact_email\"></td>
         </tr>

         <tr>
          <td align=right>Url:</td>
          <td><input name=contact_url type=text size=40 maxlength=80 value=\"$contact_url\"></td>
         </tr>
         
        </table>";

}

sub output_check_out_table
{
    print "
       <center>
       <table width=90% cellpadding=5 cellspacing=0 bgcolor=#000000 border=1>
       <tr bgcolor=#FFFFE0><th align=left><font color=#000000>Checked Out</font></th><th align=left><font color=#000000>Available</font></th></tr>


       <tr>
        <td valign=top>
        <FORM name=\"form1\" action=\"$script_path/\" method=\"post\">
        <b>Select an item to return</b><br>
        <SELECT name=serial>\n";
        for($i=0;$i<$num_checked;$i++){print "<OPTION value=\"@serials1[$i]\">@serials1[$i]\n";}

    print "
        </SELECT>
        <INPUT type=hidden name=\"checked_out\" value=\"no\">
        <br>
        <INPUT type=submit name=\"button\" value=\"Return Item\">
        </FORM>

        </td>
        <td valign=top>
        <FORM name=\"form2\" action=\"$script_path/\" method=\"post\">
        <b>Check out item to:</b><br>
        <SELECT name=serial>\n";
        for($i=0;$i<$num_available;$i++){print "<OPTION value=\"@serials2[$i]\">@serials2[$i]\n";}

    print "
        </SELECT>
        <INPUT type=text name=\"checked_out_by\" size=40 maxlength=80>
        <INPUT type=hidden name=\"checked_out\" value=\"yes\">
        <br>
        <INPUT type=submit name=\"button\" value=\"Check Out Item\">
        </FORM>
        </td>
       </tr>

       <tr>
        <td valign=top width=50%>
         <table cellpadding=5 cellspacing=5 border=0 width=100%>
         <tr><th align=left>Serial</th><th align=left>Description</th><th align=left>Checked out by</th></tr>";
         for($i=0;$i<$num_checked;$i++){print "\n@checked[$i]";}
    print "
         </table>
        </td>
        <td valign=top width=50%>
         <table cellpadding=5 cellspacing=5 border=0 width=100%>
         <tr><th align=left>Serial</th><th align=left>Description</th><th></th></tr>";
         for($i=0;$i<$num_available;$i++){print "\n@available[$i]";}
    print "
         </table>
        </td>
       </tr>
 

      </table>
      </center>";


}
