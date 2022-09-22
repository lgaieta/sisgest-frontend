/**
 * Adapts service entries to a model's type structure.
 * Helps keeping data type consistency in the app.
 * You should always use an adapter when you use a service,
 * this will ensure data structure is the same in the whole app.
 * If you change the service's return type, just change
 * its adapter to keep the same return type.
 *
 * @template Entry Generic for the function entry type
 * @template Return Generic for the function return type
 * @param {Entry} data Entry that becomes from the service
 * @returns {Return} Adapted data that will always be the same
 */

export type Adapter<Entry, Return> = (data: Entry) => Return;
