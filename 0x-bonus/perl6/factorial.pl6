sub postfix:<!> (Int $n) {
  fail "Not a natural number" if $n < 0;
  [*] 2..$n;
}

say 7!;
say 1000!;
