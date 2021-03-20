<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_headless' );

/** MySQL database username */
define( 'DB_USER', 'wp_headless' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp_headless' );

/** MySQL hostname */
define( 'DB_HOST', 'db-headless' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'B#K<cmuzg8,QSk*cg~o&El|S1+d7eYrtrX_xbh/j0wPE4yXt<1-_eoo,p P]mcF`' );
define( 'SECURE_AUTH_KEY',   'E.A=mh*BFUnc5*!]YPwC&lz(r(~N qm$J=R%Qb#ih6.<xQ[)$b0`JjO|o[EY_Qj1' );
define( 'LOGGED_IN_KEY',     '|%j{]m%LB|i#+aWT1E?iab-0xE=@6<:nKuUMR/kH6{VD1z0,(&aI;&.ZxJEl[_8z' );
define( 'NONCE_KEY',         'Kb@QnHC% c)ySv?;5Y[||J}27DZSTZABRb+w!y/1M%c0>uDekFXOT8eRXng+cI6{' );
define( 'AUTH_SALT',         ':Y3:H=.Gpm o3s,8aK!9?!^]UW,oeW r$[4/Jn[3;7*Hng)$]]`u&l1<X(KU@[-I' );
define( 'SECURE_AUTH_SALT',  '`kZ%}S3?`K1< n*F]9QuHf-]$nXvFyy9~1GOow{:Sb;;FO]:mM,~?KrGB4b7u9M>' );
define( 'LOGGED_IN_SALT',    '(x8mJGbm$j/J8U71u(]wh4VlSLEm>r.=U x=mu@qO.cISI)E(]~Pz0-@:R&yo(ld' );
define( 'NONCE_SALT',        'k)yEYj {=j_Ut:o|#QhUWH/TYn{ mGj@t29aE~W+&TX}n-aLf@f&?j9WC|WKDs7g' );
define( 'WP_CACHE_KEY_SALT', 'Ia3j,o!_#$E^Hx3fuc#XHOFKUwP6L=Lasr?v!2)=D;s ^v^zuLD#e80VP31d?our' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
