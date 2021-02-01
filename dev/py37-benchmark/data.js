window.BENCHMARK_DATA = {
  "lastUpdate": 1612159805682,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "729b80187da2cd5eb1f82fb182d362b93484746a",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a22cb4c",
          "timestamp": "2021-02-01T06:05:05Z",
          "tree_id": "c8bdeea48830f9eb909405a8bbf30c1ec082989a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/729b80187da2cd5eb1f82fb182d362b93484746a"
        },
        "date": 1612159804850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1098.085500884063,
            "unit": "iter/sec",
            "range": "stddev: 0.000052719369371777164",
            "extra": "mean: 910.6758983657511 usec\nrounds: 551"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1582.2961338095072,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879143386357879",
            "extra": "mean: 631.9929491279349 usec\nrounds: 1317"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12280.838514164767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074911246751936216",
            "extra": "mean: 81.42766463760566 usec\nrounds: 1807"
          }
        ]
      }
    ]
  }
}