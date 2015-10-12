require_relative '../bubble_sort'

describe 'bubble_sort()' do

  it 'should sort a small array in numeric order' do
    expect( bubble_sort([3, 2, 1]) ).to eq( [1, 2, 3] )
  end

  it 'should not choke on an empty array' do
    expect( bubble_sort([]) ).to eq( [] )
  end

  it 'should be cool with some duplicates' do
    expect( bubble_sort([2, 1, 1, 1, 2, 3]) ).to eq( [1, 1, 1, 2, 2, 3] )
  end

  it 'should work with an already sorted array' do
    expect( bubble_sort([10, 20, 30, 40, 50]) ).to eq( [10, 20, 30, 40, 50] )
  end

  it 'should correctly sort a giant array' do
    giant_array = (1..5_000).to_a.shuffle
    expect( bubble_sort(giant_array) ).to eq( (1..5_000).to_a )
  end

end