window.BENCHMARK_DATA = {
  "lastUpdate": 1628455922802,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f0ada6eb5c02972105c38eefd6057005c84f7302",
          "message": "Merge pull request #274 from TeoZosa/add-rich-text-support-to-console-output\n\n💄🔊Add Rich Text Support to Console Output\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@092bbf3",
          "timestamp": "2021-08-08T20:43:26Z",
          "tree_id": "aa8291ac7674d2af25927006c8431e4c9916e15d"
        },
        "date": 1628455920670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.68749707509073,
            "unit": "iter/sec",
            "range": "stddev: 0.00005030348188101106",
            "extra": "mean: 3.2820513135579974 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 885.9318033232895,
            "unit": "iter/sec",
            "range": "stddev: 0.000021203756756458537",
            "extra": "mean: 1.1287550534350614 msec\nrounds: 786"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1832.2883362345347,
            "unit": "iter/sec",
            "range": "stddev: 0.000013134336226350586",
            "extra": "mean: 545.7656310005563 usec\nrounds: 729"
          }
        ]
      }
    ]
  }
}