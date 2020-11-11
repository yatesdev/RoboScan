/**
 * RoboScan API
 * RoboScan API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface SessionSettings { 
    /**
     * Frame name of the first photo
     */
    initial_frame?: string;
    /**
     * Maximum number of files to download per photo
     */
    max_number_of_files?: number;
    /**
     * Should photos be deleted from the camera after download
     */
    delete_photo_after_download?: boolean;
    /**
     * Metadata: lens serial number
     */
    metadata_lens_serial_number?: string;
    /**
     * Metadata: roll identifier
     */
    metadata_roll_id?: string;
    /**
     * Metadata: film maker
     */
    metadata_film_maker?: string;
    /**
     * Metadata: film (including the manufacturer)
     */
    metadata_film?: string;
    /**
     * Metadata: film alias
     */
    metadata_film_alias?: string;
    /**
     * Metadata: film RMS value
     */
    metadata_film_grain?: number;
    /**
     * Metadata: film type
     */
    metadata_film_type?: string;
    /**
     * Metadata: developer used
     */
    metadata_developer?: string;
    /**
     * Metadata: development process
     */
    metadata_develop_process?: string;
    /**
     * Metadata: developer manufacturer
     */
    metadata_developer_maker?: string;
    /**
     * Metadata: developer dilution
     */
    metadata_developer_dilution?: string;
    /**
     * Metadata: development time
     */
    metadata_develop_time?: string;
    /**
     * Metadata: processing lab
     */
    metadata_lab?: string;
    /**
     * Metadata: processing lab address
     */
    metadata_lab_address?: string;
    /**
     * Metadata: filter name
     */
    metadata_filter?: string;
}

