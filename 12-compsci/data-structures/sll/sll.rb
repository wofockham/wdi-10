class SinglyLinkedList
  attr_accessor :head

  include Enumerable # Mixin

  def initialize(first_value)
    @head = Node.new(first_value) if first_value
  end

  def last
    current_node = @head

    while current_node.next
      current_node = current_node.next
    end

    current_node
  end

  def append(value)
    node = Node.new(value)
    self.last.next = node

    self # Return the object itself to allow chaining like in jQuery
  end

  def prepend(value)
    # Your code here
  end

  def length # Look up how to alias methods in Ruby for count() and size()
    # Your code here
  end

  def find(needle)
    # Returns the node containing needle as its value.
    # Your code here
  end

  def reverse
    # Returns a new SLL with the nodes in reverse order
    # Your code here
  end

  def reverse!
    # Reverses the nodes in place
    # Your code here
  end

  def each
    current_node = @head

    while current_node
      yield(current_node.value) if block_given?
      current_node = current_node.next
    end
  end

  class Node
    attr_accessor :value, :next

    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

end

bros = SinglyLinkedList.new('Zeppo')
bros.append('Grouho')
bros.append('Harpo').append('Chico')

require 'pry'
binding.pry





