window.BENCHMARK_DATA = {
  "lastUpdate": 1631119355336,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7472c3654740880ace20573ebcab1c559319a0bc",
          "message": ":cookie: :memo: Document Make's role in project\n\nInterface shims leverage the\n[dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)\nto allow for implementation detail flexibility, interface extensibility\nand, in this case, a uniform interface across projects.\n\nEx. from \"The Missing README\"\n- Chapter 11: Creating Evolvable Architectures\n- Section: Design for Evolvability\n- Sub-section: You Ain’t Gonna Need It (para. 9)\n\n\"In the meantime, place interface shims where you suspect optimizations\ncan be inserted, but don’t actually implement them. For example, if you\nare creating a new file format and suspect you’ll need compression or\nencryption later, provide a header that specifies the encoding, but only\n implement the uncompressed encoding.\" [1]\n\n[1] C. Riccomini and D. Ryaboy, The Missing README: A Guide for the New Software Engineer, Paperback. No Starch Press, 2021.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b83ef09",
          "timestamp": "2021-09-08T16:33:56Z",
          "tree_id": "82d3e961390c21846e0b55ec248b0934493bce6e"
        },
        "date": 1631119352847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.97699600436755,
            "unit": "iter/sec",
            "range": "stddev: 0.00017598665492862201",
            "extra": "mean: 3.4845998596514014 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 814.5929364052276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003918538165911984",
            "extra": "mean: 1.2276070111937967 msec\nrounds: 804"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1665.8530306786997,
            "unit": "iter/sec",
            "range": "stddev: 0.00010170547745018094",
            "extra": "mean: 600.2930520182691 usec\nrounds: 769"
          }
        ]
      }
    ]
  }
}