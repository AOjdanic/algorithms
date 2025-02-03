package main

import "fmt"

func insertionSort(arr []int) []int {

	for i := 0; i < len(arr); i++ {
		j := i - 1

		for j >= 0 && arr[j] > arr[j+1] {
			temp := arr[j+1]
			arr[j+1] = arr[j]
			arr[j] = temp

			j--
		}
	}

	return arr
}

func main() {

	input := []int{2, 3, 4, 1, 6}

	fmt.Println(insertionSort(input))
}
