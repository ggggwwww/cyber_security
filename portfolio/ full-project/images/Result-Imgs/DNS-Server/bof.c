#include <stdio.h>
#include <string.h>

int main(){
	const char SECRET[] = "SECRET";
	char input[]="Lorem Ipsum";
	char buffer[4];

	strcpy(buffer, input);
	
	printf("result: %s\n", buffer);
	
	return 0;
}