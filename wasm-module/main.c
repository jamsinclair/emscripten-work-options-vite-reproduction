#include <pthread.h>
#include <stdio.h>

// Thread function 1
void* thread_func1() {
    printf("Output from Thread 1!\n");
    return NULL;
}

// Thread function 2
void* thread_func2() {
    printf("Output from Thread 2!\n");
    return NULL;
}

// Function to run the threads
__attribute__((used))
int run_threaded_func() {
    pthread_t thread1, thread2;

    if (pthread_create(&thread1, NULL, thread_func1, NULL) != 0) {
        printf("Error creating Thread 1\n");
        return 1;
    }

    if (pthread_create(&thread2, NULL, thread_func2, NULL) != 0) {
        printf("Error creating Thread 2\n");
        return 1;
    }

    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Both threads have finished executing.\n");
    return 0;
}
