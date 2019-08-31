<?php
	
	function my_simple_crypt( $string, $action = 'e' ) {
		// you may change these values to your own
		$secret_key = '34wxe5c6vbft7gnyh8mu3x44ce5v76b';
		$secret_iv = 'zweasrdtfygbuhnmijokp234567tgbynh';
 
		$output = false;
		$encrypt_method = "AES-256-CBC";
		$key = hash( 'sha256', $secret_key );
		$iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
 
		if( $action == 'e' ) {
			$output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
		}
		else if( $action == 'd' ){
			$output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
		}
 
		return $output;
	}
