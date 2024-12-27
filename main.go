package main

import (
	"log"
	"os"
)

func main() {
	err := os.RemoveAll(".git")
	if err != nil {
		log.Fatal(err)
	}
	log.Println(".git directory successfully removed")
}
