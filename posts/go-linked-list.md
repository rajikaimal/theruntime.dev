---
title: "Back to basics: Go - Linked List"
publish_date: 2023-04-10
---

A basic implementation of a LinkedList in Go.

```go
type Node struct {
	data string
	next *Node
}

type LinkedList struct {
	length int
	head   *Node
}

func (l *LinkedList) Len() int {
	return l.length
}

func (l *LinkedList) Enqueue(data string) {
	node := &Node{
		data: data,
		next: nil,
	}

	if l.head == nil {
		l.head = node
		l.length++
	} else {
		current := l.head

		for current.next != nil {
			current = current.next
		}

		current.next = node
		l.length++
	}
}

func (l *LinkedList) Dequeue() {
	if l.head == nil {
		l.head = nil
		l.length--
	} else {
		current := l.head

		for current.next.next != nil {
			current = current.next
		}

		current.next = nil
		l.length--
	}
}

func (l *LinkedList) Show() {
	current := l.head

	for current != nil {
		fmt.Println(current.data)
		current = current.next
	}
}

func main() {
	linkedList := LinkedList{
		length: 0,
		head:   nil,
	}

	linkedList.Enqueue("Madara")
	linkedList.Enqueue("Itachi")
	linkedList.Enqueue("Shisui")
	linkedList.Show()
	linkedList.Dequeue()
	linkedList.Show()
}
```
