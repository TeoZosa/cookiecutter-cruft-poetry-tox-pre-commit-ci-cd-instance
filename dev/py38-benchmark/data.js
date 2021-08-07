window.BENCHMARK_DATA = {
  "lastUpdate": 1628368772903,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "cc4d9a6a11b72fbbe0cb171c086d38931173b3b3",
          "message": ":memo: :pencil2: Fix casing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e7a2f57",
          "timestamp": "2021-08-07T20:31:29Z",
          "tree_id": "ace37f13c639df36de9bb1f1b9d3f6d65f689383"
        },
        "date": 1628368770102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.4046472335517,
            "unit": "iter/sec",
            "range": "stddev: 0.00017185454643603063",
            "extra": "mean: 1.0358350800004785 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1343.6551146150669,
            "unit": "iter/sec",
            "range": "stddev: 0.00010884139770497584",
            "extra": "mean: 744.2385989700058 usec\nrounds: 1167"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8653.216272147587,
            "unit": "iter/sec",
            "range": "stddev: 0.000031413007806887846",
            "extra": "mean: 115.56396703255128 usec\nrounds: 1365"
          }
        ]
      }
    ]
  }
}