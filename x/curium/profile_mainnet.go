// +build !testnet

package curium
import "fmt"


func init() {
	fmt.Println("******* Starting in mainnet mode ********")
}

func IsTestnet() bool {
	return false
}

func IsMainnet() bool {
	return !IsTestnet()
}