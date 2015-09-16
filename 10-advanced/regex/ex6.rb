ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/
end
