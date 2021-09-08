window.BENCHMARK_DATA = {
  "lastUpdate": 1631119264779,
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
        "date": 1631119261977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 395.3740940519673,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645901052008213",
            "extra": "mean: 2.5292501836717753 msec\nrounds: 147"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1147.2662296377132,
            "unit": "iter/sec",
            "range": "stddev: 0.000019682966560305784",
            "extra": "mean: 871.6372661956439 usec\nrounds: 988"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2410.642931407361,
            "unit": "iter/sec",
            "range": "stddev: 0.000010393562218496714",
            "extra": "mean: 414.8270932087766 usec\nrounds: 869"
          }
        ]
      }
    ]
  }
}