class Number
  def self.bin2dec(bin)
    # bin.chars.reverse.each_with_index.map { |b, i| (b.to_i * 2**i) }.reduce(:+)

    number = 0
    power = 0
    bin.chars.reverse.each do |bit|
      bit = bit.to_i
      number += (bit * 2 ** power) # if bit > 0
      power += 1
    end
    number
  end
end