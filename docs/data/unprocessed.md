---
title: Unprocessed Data & Captures
sidebar_position: 100
---

Unprocessed data is available as the capture-level data. You can obtain the
unprocessed video data via downloading the following parts `--parts
capture_raw_vrs capture_raw_stitched_videos`

- `capture_raw_vrs` describes all the Aria/Egocentric VRS files files for each
capture
- `capture_raw_stitched_videos` describes all the GoPro MP4 files stitched
  together to make one long contiguous video

## Capture-Level Information

### Timesync
Timesync information is present for each capture when downloading via `--parts captures`. This data is available as `capture/<capture_name>/timesync.csv`.

The timesync information is present as a CSV file. Where each row in the CSV file
describes a matching timestamp & frame number for each camera. 

The columns of the CSV file are of the format `<cam_id>_pts` and
`<cam_id>_frame_number` for the Presentation Time-Stamp (PTS) and frame number
respectively.

### Take-Timing Information

Take-timing information is present under the file `take_timings.csv`, which
includes the following columns `take_id`, `start_idx` and `end_idx` (inclusive).
`start_idx` and `end_idx` are indices into the timesync file.
