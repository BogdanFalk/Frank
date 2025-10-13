<?php
// Simple cache clearing script for cPanel
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

echo "Cache cleared! Files will be served fresh.";
?>
