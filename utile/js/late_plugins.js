function CookiebotCallback_OnAccept() {
     if (Cookiebot.consent) {
       window.location.reload(false);
      // If we needed to pull the document from
      //  the web-server again (such as where the document contents
      //  change dynamically) we would pass the argument as 'true'.
     }
     else
     {
       if ( Get_Cookie( 'vuid' ) )
       {
           Delete_Cookie('vuid');
       }
       if ( Get_Cookie( '_ga' ) )
       {
           Delete_Cookie('_ga');
       }
       if ( Get_Cookie( '_gid' ) )
       {
           Delete_Cookie('_gid');
       }
       if ( Get_Cookie( '_gat' ) )
       {
           Delete_Cookie('_gat');
       }
       if ( Get_Cookie( 'NID' ) )
       {
           Delete_Cookie('NID');
       }
       if ( Get_Cookie( 'fr' ) )
       {
           Delete_Cookie('fr');
       }
       if ( Get_Cookie( 'tr' ) )
       {
           Delete_Cookie('tr');
       }
     }
 }
