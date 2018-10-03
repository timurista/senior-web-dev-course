/*
 *  Bridge from JS into Chipmunk2D in Wasm
 */
#include <emscripten.h>
#include <chipmunk/chipmunk.h>
#include <stdlib.h>
#include <memory.h>

/**
 *  A struct that manages our instantiation of
 *  the Chipmunk2D physics engine
 */
typedef struct {
    cpSpace  *cmi_Space;      /**< Holds instance of Chipmunk2D */
    float    cmi_Location[3]; /**< Stores x, y, rotation        */
} CM_Instance;

/*
 *  This is our interface from the Wasm world out into
 *  the JS world when using 'C'
 */

/**
 *  Constructor for the Chipmunk2D engine
 */
CM_Instance *
CM_Instance_new() {
    CM_Instance     *cm;

    cm = malloc(sizeof *cm);
    if (cm) {
        memset(cm, 0, sizeof *cm);
    }
    // cpVect is a 2D vector and cpv() is a shortcut
    // for initializing them.
    cpVect gravity = cpv(0, 50);
  
    // Create an empty space.
    cm->cmi_Space = cpSpaceNew();
    cpSpaceSetGravity(cm->cmi_Space, gravity);

    return cm;
}

/**
 *  Destructor for when we're all done (frees everything).
 */
void
CM_Instance_destroy(CM_Instance *cmi) {
    if (cmi != NULL) {
        cpSpaceFree(cmi->cmi_Space);

        free(cmi);
    }
}